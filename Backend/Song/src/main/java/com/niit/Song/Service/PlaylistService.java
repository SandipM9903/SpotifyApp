package com.niit.Song.Service;

import com.niit.Song.Exception.ProductNotFoundException;
import com.niit.Song.Exception.UserAlreadyExistsException;
import com.niit.Song.Exception.UserNotFoundException;
import com.niit.Song.Model.CommonUser;
import com.niit.Song.Model.Playlist;
import com.niit.Song.Model.User;

import java.util.List;

public interface PlaylistService
{
    User registerUser(CommonUser commonUser) throws UserAlreadyExistsException;
    User saveUserPlaylistToList(Playlist playlist, String userName) throws UserNotFoundException;
    User deleteUserProductFromList(String userName, String playlistId) throws UserNotFoundException, ProductNotFoundException;
    List<Playlist> getAllUserPlaylist(String userName) throws UserNotFoundException;
}
