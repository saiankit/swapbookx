package com.swapbookx.api.controllers;

import java.util.List;

import com.swapbookx.api.payloads.ApiResponse;
import com.swapbookx.api.payloads.BookDto;
import com.swapbookx.api.services.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PutMapping("/{bookID}")
    public ResponseEntity<BookDto> updateBook(@RequestBody BookDto bookDto, @PathVariable("bookID") Integer uid)
    {
        BookDto updateBook = this.bookService.updateBook(bookDto, uid);
        return ResponseEntity.ok(updateBook);
    }
    //Delete
    @DeleteMapping("/{bookID}")
    public ResponseEntity<ApiResponse> deleteBook(@PathVariable("bookID") Integer uid){
        this.bookService.deleteBook(uid);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Book Deleted", true),HttpStatus.OK);
    }

    //Get
    @GetMapping("/")
    public ResponseEntity<List<BookDto>> getAllBooks(){
        return ResponseEntity.ok(this.bookService.getAllBooks());
    }

    //Get - Book

    @GetMapping("/{bookID}")
    public ResponseEntity<BookDto> getSingleBook(@PathVariable("bookID") Integer uid){
        return ResponseEntity.ok(this.bookService.getBookById(uid));
    }

}
