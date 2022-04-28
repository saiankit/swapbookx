package com.swapbookx.api.services;

import com.swapbookx.api.payloads.TransactionDto;
import com.swapbookx.api.payloads.TxReturnDto;

import java.util.List;


public interface TransactionService {
    TransactionDto createTransaction(TransactionDto transactionDto);
    TransactionDto getTransactionByID(Integer transactionID);

    List<TransactionDto> getAllTransactions();

    TransactionDto updateTransaction(TransactionDto transactionDto, Integer transactionID);

    List<TxReturnDto> getTxDetails(Integer userID);

}
