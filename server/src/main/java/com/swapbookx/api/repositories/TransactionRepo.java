package com.swapbookx.api.repositories;

import com.swapbookx.api.models.Transaction;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepo extends JpaRepository<Transaction, Integer>{
    
}
