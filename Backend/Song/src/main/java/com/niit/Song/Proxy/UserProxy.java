package com.niit.Song.Proxy;

import com.niit.Song.Model.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="user-authentication-service", url="localhost:8085")
public interface UserProxy
{
    @PostMapping("/authservice/register")
    public ResponseEntity<?> sendUserObjectToAuth(@RequestBody UserDTO userDTO);
}
