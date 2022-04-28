package com.swapbookx.api.services;
import java.util.List;

import com.swapbookx.api.models.Request;
import com.swapbookx.api.payloads.ReqReturnDto;
import com.swapbookx.api.payloads.RequestDto;

public interface RequestService {
    RequestDto createRequest(RequestDto request);
    void deleteRequest(Integer requestID);

    List<RequestDto> getAllRequests();
    List<RequestDto> getRequestsBorrower(Integer borrowerID);
    RequestDto getRequestById(Integer uid);

    List<ReqReturnDto> getReqDetails(Integer userID);
    int getReqOnBook(Integer bookID);

}