package com.niit.Song.Controller;

import com.niit.Song.Exception.ProductNotFoundException;
import com.niit.Song.Exception.UserAlreadyExistsException;
import com.niit.Song.Exception.UserNotFoundException;
import com.niit.Song.Model.CommonUser;
import com.niit.Song.Model.Playlist;
import com.niit.Song.Model.User;
import com.niit.Song.Service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class PlaylistController
{
    @Autowired
    PlaylistService playlistService;

    private ResponseEntity<?> responseEntity;

    //http://localhost:65100/api/v1/register
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody CommonUser commonUser) throws UserAlreadyExistsException {
        try{
            return new ResponseEntity<>(playlistService.registerUser(commonUser), HttpStatus.CREATED);
        }
        catch (UserAlreadyExistsException ex){
            throw new UserAlreadyExistsException();
        }
    }

    //http://localhost:65100/api/v1/user/{userName}/playlist
    @PostMapping("/user/{userName}/playlist")
    public ResponseEntity<?> saveUserPlaylistToList(@RequestBody Playlist playlist, @PathVariable String userName) throws UserNotFoundException
    {
        try
        {
            responseEntity = new ResponseEntity<>(playlistService.saveUserPlaylistToList(playlist,userName), HttpStatus.CREATED);
        }
        catch (UserNotFoundException e)
        {
            throw new UserNotFoundException();
        }
        return responseEntity;
    }

    //http://localhost:65100/api/v1/user/{userName}/playlists
    @GetMapping("/user/{userName}/playlists")
    public ResponseEntity<?> getAllUserPlaylistFromList(@PathVariable String userName) throws UserNotFoundException
    {
        try
        {
            responseEntity = new ResponseEntity<>(playlistService.getAllUserPlaylist(userName), HttpStatus.OK);
        }
        catch (UserNotFoundException e)
        {
            throw new UserNotFoundException();
        }
        return responseEntity;
    }

    //http://localhost:65100/api/v1/user/{userName}/{playlistId}
    @DeleteMapping("/user/{userName}/{playlistId}")
    public ResponseEntity<?> deleteUserPlaylistFromList(@PathVariable String userName, @PathVariable String playlistId) throws UserNotFoundException, ProductNotFoundException
    {
        try
        {
            responseEntity = new ResponseEntity<>(playlistService.deleteUserProductFromList(userName,playlistId), HttpStatus.OK);
        }
        catch (UserNotFoundException | ProductNotFoundException e)
        {
            throw new ProductNotFoundException();
        }
        return responseEntity;
    }
}
