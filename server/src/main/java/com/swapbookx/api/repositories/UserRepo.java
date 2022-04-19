package com.swapbookx.api.repositories;

import com.swapbookx.api.models.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer>{
    
}
