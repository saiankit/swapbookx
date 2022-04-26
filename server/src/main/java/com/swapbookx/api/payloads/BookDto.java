package com.swapbookx.api.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class BookDto {
    private int bookID;
    private String title;
    private String author;
    private String publisher;
    private String edition;
    private String year;
    private String genre;
    private String lenderID;
    private String borrowerID;
    private String imageSrc;
}
