package com.swapbookx.api.payloads;

import java.util.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class TxDto {
    private int txId;
    private int lenderId;
    private int borrowerId;
    private int book_Id;
    private Date dateIssued;
    private Date returnDate;
}
