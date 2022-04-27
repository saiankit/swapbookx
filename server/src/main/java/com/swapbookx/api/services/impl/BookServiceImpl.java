package com.swapbookx.api.services.impl;

import java.util.List;

import com.swapbookx.api.payloads.BookDto;
import com.swapbookx.api.services.BookService;

import java.util.stream.Collectors;

import com.swapbookx.api.repositories.BookRepo;
import com.swapbookx.api.exceptions.ResourceNotFoundException;
import com.swapbookx.api.models.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {


    @Autowired
    private BookRepo bookRepo;

    @Override
    public BookDto createBook(BookDto bookDto) {

        Book book = this.dtoToBook(bookDto);
        Book savedBook = this.bookRepo.save(book);

        return this.bookToDto(savedBook);
    }

    @Override
    public BookDto updateBook(BookDto bookDto, Integer bookID) {

        Book book = this.bookRepo.findById(bookID).orElseThrow(( () -> new ResourceNotFoundException("Book","id", bookID)));

        book.setTitle(bookDto.getTitle());
        book.setAuthor(bookDto.getAuthor());
        book.setGenre(bookDto.getGenre());
        book.setEdition(bookDto.getEdition());
        book.setYear(bookDto.getYear());
        book.setPublisher(bookDto.getPublisher());
        book.setBorrowerID(bookDto.getBorrowerID());

        Book updatedBook = this.bookRepo.save(book);

        BookDto updatedBookDto = this.bookToDto(updatedBook);

        return updatedBookDto;
    }

    @Override
    public void deleteBook(Integer bookID) {
        Book book = this.bookRepo.findById(bookID).orElseThrow(( () -> new ResourceNotFoundException("Book","id", bookID)));

        this.bookRepo.delete(book);
    }



    @Override
    public List<BookDto> getAllBooks() {
        List<Book> books = this.bookRepo.findAll();

        List<BookDto> bookDtos = books.stream().map(book->this.bookToDto(book)).collect(Collectors.toList());
        return bookDtos;
    }

    private Book dtoToBook(BookDto bookDto) {
        Book book = new Book();
        book.setBookID(bookDto.getBookID());
        book.setTitle(bookDto.getTitle());
        book.setAuthor(bookDto.getAuthor());
        book.setGenre(bookDto.getGenre());
        book.setEdition(bookDto.getEdition());
        book.setYear(bookDto.getYear());
        book.setPublisher(bookDto.getPublisher());
        book.setLenderID(bookDto.getLenderID());
        book.setBorrowerID(bookDto.getBorrowerID());
        book.setImageSrc(bookDto.getImageSrc());

        return book;
    }

    public BookDto bookToDto(Book book) {
        BookDto bookDto = new BookDto();

        bookDto.setBookID(book.getBookID());
        bookDto.setTitle(book.getTitle());
        bookDto.setAuthor(book.getAuthor());
        bookDto.setGenre(book.getGenre());
        bookDto.setEdition(book.getEdition());
        bookDto.setYear(book.getYear());
        bookDto.setPublisher(book.getPublisher());
        bookDto.setLenderID(book.getLenderID());
        bookDto.setBorrowerID(book.getBorrowerID());
        bookDto.setImageSrc(book.getImageSrc());


        return bookDto;
    }

    @Override
    public BookDto getBookById(Integer uid) {
        Book book = this.bookRepo.findById(uid).orElseThrow(( () -> new ResourceNotFoundException("book","id", uid)));

        return this.bookToDto(book);
        
    }


}
