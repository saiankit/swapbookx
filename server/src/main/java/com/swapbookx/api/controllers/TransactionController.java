package com.swapbookx.api.controllers;

import com.swapbookx.api.payloads.TransactionDto;
import com.swapbookx.api.services.TransactionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @PostMapping("/")
    public ResponseEntity<TransactionDto> createTransaction(@RequestBody TransactionDto transactionDto) {
        TransactionDto createTransactionDto = this.transactionService.createTransaction(transactionDto);

        return new ResponseEntity<>(createTransactionDto, HttpStatus.CREATED);
    }

}
