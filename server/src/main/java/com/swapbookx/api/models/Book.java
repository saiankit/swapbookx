package com.swapbookx.api.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="books")
@NoArgsConstructor
@Getter
@Setter
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookID;

    @Column(name="book_title", nullable = false)
    private String title;

    @Column(name="book_author", nullable = false)
    private String author;

    @Column(name="book_publisher", nullable = false)
    private String publisher;

    @Column(name="book_edition", nullable = false)
    private String edition;

    @Column(name="book_year", nullable = false)
    private String year;

    @Column(name="book_genre", nullable = false)
    private String genre;

    @Column(name="book_lender", nullable = false)
    private String lenderID;

    @Column(name="book_borrower")
    private String borrowerID;

}
