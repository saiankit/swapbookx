package com.swapbookx.api.services;

import java.util.List;

import com.swapbookx.api.payloads.BookDto;

public interface BookService {
    BookDto createBook(BookDto book);
    BookDto updateBook(BookDto book, Integer bookID);
    void deleteBook(Integer bookID);

    List<BookDto> getAllBooks();
    BookDto getBookById(Integer uid);

    List<BookDto> getOwner(Integer userID);

}
