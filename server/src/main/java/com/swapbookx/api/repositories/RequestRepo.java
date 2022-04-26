package com.swapbookx.api.repositories;

import com.swapbookx.api.models.Request;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepo extends JpaRepository<Request, Integer>{

}
