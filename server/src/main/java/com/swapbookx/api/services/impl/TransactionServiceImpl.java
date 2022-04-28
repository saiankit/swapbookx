package com.swapbookx.api.services.impl;

import com.swapbookx.api.services.UserService;
import com.swapbookx.api.services.BookService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.swapbookx.api.exceptions.ResourceNotFoundException;
import com.swapbookx.api.models.Transaction;
import com.swapbookx.api.models.User;
import com.swapbookx.api.repositories.UserRepo;
import com.swapbookx.api.services.impl.UserServiceImpl;
import com.swapbookx.api.payloads.BookDto;
import com.swapbookx.api.payloads.TransactionDto;
import com.swapbookx.api.payloads.TxReturnDto;
import com.swapbookx.api.payloads.UserDto;
import com.swapbookx.api.repositories.TransactionRepo;
import com.swapbookx.api.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TransactionServiceImpl implements TransactionService {
    @Autowired
    private TransactionRepo transactionRepo;

    @Autowired
    private UserService userService;

    @Autowired
    private BookService bookService;


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

    @Override
    public List<TxReturnDto> getTxDetails(Integer userID) {

        List<Transaction> transactions = this.transactionRepo.findAll();
        List<TransactionDto> transactionDtos = transactions.stream().map(transaction->this.transactionToDto(transaction)).collect(Collectors.toList());

        List<TxReturnDto> ans = new ArrayList();

        for(int i=0;i<transactionDtos.size();i++){
            TransactionDto now = transactionDtos.get(i);
            TxReturnDto store = new TxReturnDto();
            if(now.getLenderID()== userID){
                store.setTransactionID(now.getTransactionID());
                store.setBorrowerID(now.getBorrowerID());
                store.setBookID(now.getBookID());
                store.setDateIssued(now.getDateIssued());
                store.setReturnDate(now.getReturnDate());

                BookDto bkDetails = bookService.getBookById(now.getBookID());
                store.setTitle(bkDetails.getTitle());
                store.setAuthor(bkDetails.getAuthor());
                store.setImageSrc(bkDetails.getImageSrc());


                UserDto txDetails = userService.getUserById(userID);
                store.setLenderName(txDetails.getName());

                txDetails = userService.getUserById(now.getBorrowerID());
                store.setBorrowerName(txDetails.getName());

                ans.add(store);
            }
        }

        return ans;
    }


}
