package com.swapbookx.api.services;

import java.util.List;

import com.swapbookx.api.payloads.UserDto;
import com.swapbookx.api.payloads.LoginDto;

public interface UserService {
    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user, Integer userID);
    UserDto getUserById(Integer userID);

    List<UserDto> getAllusers();

    void deleteUser(Integer userID);
    UserDto loginUser (LoginDto log);
}