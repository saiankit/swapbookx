package com.swapbookx.api.controllers;

import com.swapbookx.api.payloads.BookDto;
import com.swapbookx.api.services.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/")
    public ResponseEntity<BookDto> createBook(@RequestBody BookDto bookDto) {
        BookDto createBookDto = this.bookService.createBook(bookDto);

        return new ResponseEntity<>(createBookDto, HttpStatus.CREATED);
    }

}
