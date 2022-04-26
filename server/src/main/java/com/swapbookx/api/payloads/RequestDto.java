package com.swapbookx.api.payloads;

import java.util.Date;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class RequestDto {

    private int requestID;
    private int lenderID;
    private int borrowerID;
    private int bookID;
    private String collectionDate;
    private String collectionPlace;
    private Date returnDate;
    private boolean accepted;

}
