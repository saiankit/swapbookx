package com.swapbookx.api.services.impl;

import java.util.List;


import com.swapbookx.api.payloads.RequestDto;
import com.swapbookx.api.services.RequestService;

import java.util.stream.Collectors;

import com.swapbookx.api.repositories.RequestRepo;
import com.swapbookx.api.exceptions.ResourceNotFoundException;
import com.swapbookx.api.models.Request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    private RequestRepo requestRepo;

    @Override
    public RequestDto createRequest(RequestDto requestDto) {
        Request request = this.dtoToRequest(requestDto);
        Request savedRequest = this.requestRepo.save(request);

        return this.requestToDto(savedRequest);
    }

    @Override
    public void deleteRequest(Integer requestID) {
        Request request = this.requestRepo.findById(requestID).orElseThrow(( () -> new ResourceNotFoundException("Request","id", requestID)));

        this.requestRepo.delete(request);
    }

    @Override
    public List<RequestDto> getAllRequests() {
        List<Request> requests = this.requestRepo.findAll();

        List<RequestDto> requestDtos = requests.stream().map(request->this.requestToDto(request)).collect(Collectors.toList());
        return requestDtos;
    }

        private Request dtoToRequest(RequestDto requestDto) {
        Request request = new Request();
        request.setRequestID(requestDto.getRequestID());
        request.setLenderID(requestDto.getLenderID());
        request.setBorrowerID(requestDto.getBorrowerID());
        request.setCollectionDate(requestDto.getCollectionDate());
        request.setReturnDate(requestDto.getReturnDate());
        request.setAccepted(requestDto.getAccepted());
        request.setBorrowerID(requestDto.getBorrowerID());

        return request;
    }

    public RequestDto requestToDto(Request request) {
        RequestDto requestDto = new RequestDto();

        requestDto.setRequestID(request.getRequestID());
        requestDto.setLenderID(request.getLenderID());
        requestDto.setBorrowerID(request.getBorrowerID());
        requestDto.setBookID(request.getBookID());
        requestDto.setCollectionDate(request.getCollectionDate());
        requestDto.setReturnDate(request.getReturnDate());
        requestDto.setAccepted(request.getAccepted());
        requestDto.setBorrowerID(request.getBorrowerID());

        return requestDto;
    }

    @Override
    public RequestDto getRequestById(Integer uid) {
        Request request = this.requestRepo.findById(uid).orElseThrow(( () -> new ResourceNotFoundException("request","id", uid)));

        return this.requestToDto(request);
    }
    
}
