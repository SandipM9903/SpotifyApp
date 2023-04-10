package com.niit.Song.Service;

import com.niit.Song.Exception.ProductNotFoundException;
import com.niit.Song.Exception.UserAlreadyExistsException;
import com.niit.Song.Exception.UserNotFoundException;
import com.niit.Song.Model.CommonUser;
import com.niit.Song.Model.Playlist;
import com.niit.Song.Model.User;
import com.niit.Song.Model.UserDTO;
import com.niit.Song.Proxy.UserProxy;
import com.niit.Song.Repository.UserPlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PlaylistServiceImpl implements PlaylistService
{
    @Autowired
    private UserPlaylistRepository userPlaylistRepository;

    @Autowired
    UserProxy userProxy;

    @Override
    public User registerUser(CommonUser commonUser) throws UserAlreadyExistsException {
        User user = new User(commonUser.getUserName(), commonUser.getPassword(),new ArrayList<>());

        if (userPlaylistRepository.findById(user.getUserName()).isPresent()){
            throw new UserAlreadyExistsException();
        }

        UserDTO userDTO = new UserDTO();
        userDTO.setUserName(commonUser.getUserName());
        userDTO.setPassword(commonUser.getPassword());
        ResponseEntity<?> responseEntity = userProxy.sendUserObjectToAuth(userDTO);

        return userPlaylistRepository.insert(user);
    }

    @Override
    public User saveUserPlaylistToList(Playlist playlist, String userName) throws UserNotFoundException {
        if (userPlaylistRepository.findById(userName).isEmpty())
        {
            throw new UserNotFoundException();
        }
        User user = userPlaylistRepository.findByUserName(userName);
        if (user.getPlaylist() == null)
        {
            user.setPlaylist(Arrays.asList(playlist));
        }
        else
        {
            List<Playlist> playlists = user.getPlaylist();
            playlists.add(playlist);
            user.setPlaylist(playlists);
        }
        return userPlaylistRepository.save(user);
    }

    @Override
    public User deleteUserProductFromList(String userName, String playlistId) throws UserNotFoundException, ProductNotFoundException {
        boolean playlistIdPresent = false;
        if (userPlaylistRepository.findById(userName).isEmpty())
        {
            throw new UserNotFoundException();
        }
        User user = userPlaylistRepository.findById(userName).get();
        List<Playlist> playlists= user.getPlaylist();
        playlistIdPresent = playlists.removeIf(d->d.getPlaylistId().equals(playlistId));
        if (!playlistIdPresent)
        {
            throw new ProductNotFoundException();
        }
        user.setPlaylist(playlists);
        return userPlaylistRepository.save(user);
    }

    @Override
    public List<Playlist> getAllUserPlaylist(String userName) throws UserNotFoundException {
        if (userPlaylistRepository.findById(userName).isEmpty())
        {
            throw new UserNotFoundException();
        }
        return userPlaylistRepository.findById(userName).get().getPlaylist();
    }

}
