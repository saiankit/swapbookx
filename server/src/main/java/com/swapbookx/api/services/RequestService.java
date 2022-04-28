package com.swapbookx.api.services;
import java.util.List;

import com.swapbookx.api.models.Request;
import com.swapbookx.api.payloads.ReqReturnDto;
import com.swapbookx.api.payloads.RequestDto;

public interface RequestService {
    RequestDto createRequest(RequestDto request);
    void deleteRequest(Integer requestID);

    List<RequestDto> getAllRequests();
    List<ReqReturnDto> getRequestsBorrower(Integer borrowerID);
    List<ReqReturnDto> getReqDetails(Integer userID);
    RequestDto getRequestById(Integer uid);

    int getReqOnBook(Integer bookID);

}