package com.swapbookx.api.repositories;

import com.swapbookx.api.models.Book;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book, Integer>{

}
