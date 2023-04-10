package com.niit.Song.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "product already exists")
public class ProductAlreadyExistsException extends Exception{
}
