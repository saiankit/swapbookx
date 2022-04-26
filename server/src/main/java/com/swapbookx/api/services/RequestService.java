package com.swapbookx.api.services;
import java.util.List;

import com.swapbookx.api.payloads.RequestDto;

public interface RequestService {
    RequestDto createRequest(RequestDto request);
    void deleteRequest(Integer requestID);

    List<RequestDto> getAllRequests();
}