package com.swapbookx.api.services;

import java.util.List;

import com.swapbookx.api.payloads.LoginDto;
import com.swapbookx.api.payloads.UserDto;

import org.apache.catalina.User;

import com.swapbookx.api.payloads.LoginDto;

public interface UserService {
    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user, Integer userID);
    UserDto getUserById(Integer userID);

    List<UserDto> getAllusers();
    UserDto loginUser(LoginDto log);
    void deleteUser(Integer userID);
}