package com.swapbookx.api.models;

import java.util.Date;

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
@Table(name="transactions")
@NoArgsConstructor
@Getter
@Setter

public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int transactionID;

    @Column(name="lender_ID", nullable = false)
    private int lenderID;

    @Column(name="borrower_ID", nullable = false)
    private int borrowerID;

    @Column(name="book_ID", nullable = false)
    private int bookID;

    @Column(name="date_issued", nullable = false)
    private Date dateIssued;

    @Column(name="return_date", nullable = false)
    private Date returnDate;

}
