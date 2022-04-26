package com.swapbookx.api.services;

import com.swapbookx.api.payloads.TxDto;
import java.util.List;


public interface TransactionService {
    TxDto createTx(TxDto tx);
    TxDto getTxById(Integer txID);

    List<TxDto> getAlltx();


}
