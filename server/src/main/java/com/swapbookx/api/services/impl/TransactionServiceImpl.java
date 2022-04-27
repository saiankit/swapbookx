package com.swapbookx.api.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.swapbookx.api.exceptions.ResourceNotFoundException;
import com.swapbookx.api.models.Transaction;
import com.swapbookx.api.payloads.TransactionDto;
import com.swapbookx.api.repositories.TransactionRepo;
import com.swapbookx.api.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TransactionServiceImpl implements TransactionService {
    @Autowired
    private TransactionRepo transactionRepo;

    @Override
    public TransactionDto createTransaction(TransactionDto transactionDto) {

        Transaction transaction = this.dtoToTransaction(transactionDto);
        Transaction savedTransaction = this.transactionRepo.save(transaction);
        return this.transactionToDto(savedTransaction);
    }

    @Override
    public TransactionDto getTransactionByID(Integer transactionID) {
        Transaction transaction = this.transactionRepo.findById(transactionID).orElseThrow(( () -> new ResourceNotFoundException("transaction","id", transactionID)));

        return this.transactionToDto(transaction);
    }

    @Override
    public List<TransactionDto> getAllTransactions() {
        List<Transaction> transactions = this.transactionRepo.findAll();
        List<TransactionDto> transactionDtos = transactions.stream().map(transaction->this.transactionToDto(transaction)).collect(Collectors.toList());
        return transactionDtos;
    }

    @Override
    public TransactionDto updateTransaction(TransactionDto transactionDto, Integer transactionID) {
        
        Transaction transaction = this.transactionRepo.findById(transactionID).orElseThrow(( () -> new ResourceNotFoundException("transaction","id", transactionID)));

        transaction.setTransactionID(transactionDto.getTransactionID());
        transaction.setLenderID(transactionDto.getLenderID());
        transaction.setBorrowerID(transactionDto.getBorrowerID());
        transaction.setBookID(transactionDto.getBookID());
        transaction.setDateIssued(transactionDto.getDateIssued());
        transaction.setReturnDate(transactionDto.getReturnDate());

        Transaction updatedTransaction = this.transactionRepo.save(transaction);

        TransactionDto updatedTransactionDto = this.transactionToDto(updatedTransaction);

        return updatedTransactionDto;
    }

       private Transaction dtoToTransaction(TransactionDto transactionDto) {
        Transaction transaction = new Transaction();
        transaction.setTransactionID(transactionDto.getTransactionID());
        transaction.setLenderID(transactionDto.getLenderID());
        transaction.setBorrowerID(transactionDto.getBorrowerID());
        transaction.setBookID(transactionDto.getBookID());
        transaction.setDateIssued(transactionDto.getDateIssued());
        transaction.setReturnDate(transactionDto.getReturnDate());


        return transaction;
    }

    public TransactionDto transactionToDto(Transaction transaction) {
        TransactionDto transactionDto = new TransactionDto();

        transactionDto.setTransactionID(transaction.getTransactionID());
        transactionDto.setLenderID(transaction.getLenderID());
        transactionDto.setBorrowerID(transaction.getBorrowerID());
        transactionDto.setBookID(transaction.getBookID());
        transactionDto.setDateIssued(transaction.getDateIssued());
        transactionDto.setReturnDate(transaction.getReturnDate());


        return transactionDto;
    }

}
