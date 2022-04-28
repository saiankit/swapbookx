package com.swapbookx.api.services.impl;

import com.swapbookx.api.services.UserService;
import com.swapbookx.api.services.BookService;


import com.swapbookx.api.payloads.BookDto;


import java.util.ArrayList;
import java.util.List;

import com.swapbookx.api.payloads.ReqReturnDto;
import com.swapbookx.api.payloads.RequestDto;
import com.swapbookx.api.payloads.UserDto;
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

    @Autowired
    private UserService userService;

    @Autowired
    private BookService bookService;


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
        request.setDateIssued(requestDto.getDateIssued());
        request.setReturnDate(requestDto.getReturnDate());
        request.setAccepted(requestDto.getAccepted());
        request.setBorrowerID(requestDto.getBorrowerID());
        request.setBookID(requestDto.getBookID());

        return request;
    }

    public RequestDto requestToDto(Request request) {
        RequestDto requestDto = new RequestDto();

        requestDto.setRequestID(request.getRequestID());
        requestDto.setLenderID(request.getLenderID());
        requestDto.setBorrowerID(request.getBorrowerID());
        requestDto.setBookID(request.getBookID());
        requestDto.setDateIssued(request.getDateIssued());
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

    //get req of a lender
    @Override
    public List<ReqReturnDto> getReqDetails(Integer lenderID) {
        List<Request> requests = this.requestRepo.findAll();
        List<RequestDto> requestDtos = requests.stream().map(request->this.requestToDto(request)).collect(Collectors.toList());

        List<ReqReturnDto> ans = new ArrayList();
        for(int i=0;i<requestDtos.size();i++){
            RequestDto now = requestDtos.get(i);
            ReqReturnDto store = new ReqReturnDto();
            if(now.getLenderID()==lenderID){
                store.setRequestID(now.getRequestID());
                store.setBookID(now.getBookID());
                store.setBorrowerID(now.getBorrowerID());
                store.setDateIssued(now.getDateIssued());
                store.setReturnDate(now.getReturnDate());
                store.setLenderID(now.getLenderID());

                BookDto bkDetails = bookService.getBookById(now.getBookID());
                store.setTitle(bkDetails.getTitle());
                store.setAuthor(bkDetails.getAuthor());
                store.setImageSrc(bkDetails.getImageSrc());


                UserDto txDetails = userService.getUserById(lenderID);
                store.setLenderName(txDetails.getName());

                txDetails = userService.getUserById(now.getBorrowerID());
                store.setBorrowerName(txDetails.getName());

                ans.add(store);
            }
        }
        return ans;
    }

    //get req of a borrower
    @Override
    public List<ReqReturnDto> getRequestsBorrower(Integer borrowerID) {

        List<Request> requests = this.requestRepo.findAll();
        List<RequestDto> requestDtos = requests.stream().map(request->this.requestToDto(request)).collect(Collectors.toList());

        List<ReqReturnDto> ans = new ArrayList();
        for(int i=0;i<requestDtos.size();i++){
            RequestDto now = requestDtos.get(i);
            ReqReturnDto store = new ReqReturnDto();
            if(now.getBorrowerID()==borrowerID) {
                store.setRequestID(now.getRequestID());
                store.setBookID(now.getBookID());
                store.setLenderID(now.getLenderID());
                store.setDateIssued(now.getDateIssued());
                store.setReturnDate(now.getReturnDate());
                store.setBorrowerID(now.getBorrowerID());
                BookDto bkDetails = bookService.getBookById(now.getBookID());
                store.setTitle(bkDetails.getTitle());
                store.setAuthor(bkDetails.getAuthor());
                store.setImageSrc(bkDetails.getImageSrc());


                UserDto borrowerDetails = userService.getUserById(borrowerID);
                store.setBorrowerName(borrowerDetails.getName());

                borrowerDetails = userService.getUserById(now.getLenderID());
                store.setLenderName(borrowerDetails.getName());
                ans.add(store);
            }
        }
        return ans;
    }

    @Override
    public int getReqOnBook(Integer bookID) {

        List<RequestDto> allReq = this.getAllRequests();
        int cou =0;

        for(int i=0;i<allReq.size();i++){
            if(allReq.get(i).getBookID()==bookID){
                cou++;
            }
        }

        return cou;
    }





}
