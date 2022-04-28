package com.swapbookx.api.payloads;

import java.util.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class ReqReturnDto {
    private int requestID;
    private int lenderID;
    private int borrowerID;
    private int bookID;
    private Date dateIssued;
    private Date returnDate;

    private String title;
    private String author;
    private String imageSrc;



    private String lenderName;

    private String borrowerName;
}
