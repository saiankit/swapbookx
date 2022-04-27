package com.swapbookx.api.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.swapbookx.api.models.User;
import com.swapbookx.api.payloads.LoginDto;
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
        user.setAddress(userDto.getAddress());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setUserName(userDto.getUserName());

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
    public UserDto loginUser (LoginDto log){
        List<User> users = this.userRepo.findAll();
        // sai ankit

        List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());
        
        UserDto ans = new UserDto();
        String a = log.getUserName();
        String b = log.getPassword();
        for(int i=0;i<userDtos.size();i++){
            String c = userDtos.get(i).getUserName();
            String d = userDtos.get(i).getPassword();
            if(a==c && b==d){
                ans = userDtos.get(i);
                break;
            }
        }
        return ans;

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
        user.setUserID(userDto.getUserID());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setAddress(userDto.getAddress());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setUserName(userDto.getUserName());
        user.setIsAdmin(userDto.getIsAdmin());

        return user;
    }

    public UserDto userToDto(User user) {
        UserDto userDto = new UserDto();

        userDto.setUserID(user.getUserID());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setAddress(user.getAddress());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setUserName(user.getUserName());
        userDto.setIsAdmin(user.getIsAdmin());

        return userDto;
    }

}
