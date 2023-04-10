package com.niit.Song.Repository;

import com.niit.Song.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPlaylistRepository extends MongoRepository<User, String> {
    User findByUserName(String useName);
}
