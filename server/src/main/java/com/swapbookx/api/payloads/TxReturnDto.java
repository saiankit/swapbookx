package com.swapbookx.api.payloads;

import java.util.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class TotalDto {
    private int transactionID;
    private int lenderID;
    private int borrowerID;
    private int bookID;
    private Date dateIssued;
    private Date returnDate;

    private String title;
    private String author;
    private String genre;
    private String imageSrc;



    private String lenderUserName;
    private String lenderName;
    private String lenderEmail;

    private String borrowerUserName;
    private String borrowerName;
    private String borrowerEmail;
}
