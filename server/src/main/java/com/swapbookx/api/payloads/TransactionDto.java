package com.swapbookx.api.payloads;

import java.util.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class TransactionDto {
    private int transactionID;
    private int lenderID;
    private int borrowerID;
    private int bookID;
    private Date dateIssued;
    private Date returnDate;
}
