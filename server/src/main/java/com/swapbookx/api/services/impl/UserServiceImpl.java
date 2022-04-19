package com.swapbookx.api.services.impl;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.swapbookx.api.models.User;
import com.swapbookx.api.payloads.UserDto;
import com.swapbookx.api.repositories.UserRepo;
import com.swapbookx.api.services.UserService;
import com.swapbookx.api.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = this.dtoToUser(userDto);
        User savedUser = this.userRepo.save(user);

        return this.userToDto(savedUser);
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userID) {
        User user = this.userRepo.findById(userID).orElseThrow(( () -> new ResourceNotFoundException("User","id", userID)));

        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());


        User updatedUser = this.userRepo.save(user);

        UserDto updatedUserDto = this.userToDto(updatedUser);

        return updatedUserDto;
    }

    @Override
    public UserDto getUserById(Integer userID) {

        User user = this.userRepo.findById(userID).orElseThrow(( () -> new ResourceNotFoundException("User","id", userID)));

        return this.userToDto(user);
    }

    @Override
    public List<UserDto> getAllusers() {
        List<User> users = this.userRepo.findAll();

        List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());

        return userDtos;
    }

    @Override
    public void deleteUser(Integer userID) {
        User user = this.userRepo.findById(userID).orElseThrow(( () -> new ResourceNotFoundException("User","id", userID)));

        this.userRepo.delete(user);
    }

    private User dtoToUser(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());

        return user;
    }

    public UserDto userToDto(User user) {
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());

        return userDto;
    }

}
