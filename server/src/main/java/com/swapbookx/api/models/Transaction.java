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
@Table(name="usersss")
@NoArgsConstructor
@Getter
@Setter

// for ankit
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int txId;

    @Column(name="Lender_ID", nullable = false)
    private int lenderId;

    @Column(name="Borrower_ID", nullable = false)
    private int borrowerId;

    @Column(name="Book_ID", nullable = false)
    private int book_Id;

    @Column(name="DateIssued", nullable = false)
    private Date dateIssued;

    @Column(name="returnDate", nullable = false)
    private Date returnDate;

}
