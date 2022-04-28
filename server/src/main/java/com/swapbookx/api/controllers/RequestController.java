package com.swapbookx.api.controllers;

import java.util.List;

import com.swapbookx.api.payloads.ApiResponse;
import com.swapbookx.api.payloads.ReqReturnDto;
import com.swapbookx.api.payloads.RequestDto;
import com.swapbookx.api.services.RequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins="*")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @PostMapping("/")
    public ResponseEntity<RequestDto> createRequest(@RequestBody RequestDto requestDto) {
        RequestDto createRequestDto = this.requestService.createRequest(requestDto);

        return new ResponseEntity<>(createRequestDto, HttpStatus.CREATED);
    }
    // get all requests of a lender
    @GetMapping("/lender/{lenderID}")
    public ResponseEntity<List<ReqReturnDto>> getReqDetails(@PathVariable("lenderID") Integer lenderID){
        return ResponseEntity.ok(this.requestService.getReqDetails(lenderID));
    }

    //all req of a lender
    @GetMapping("/bookReq/{bookID}")
    public ResponseEntity<Integer> getReqOnBook(@PathVariable("bookID") Integer bookID){
        return ResponseEntity.ok(this.requestService.getReqOnBook(bookID));
    }

    // get all requests of a borrower
    @GetMapping("/borrower/{borrowerID}")
    public ResponseEntity<List<RequestDto>> getRequestsBorrower(@PathVariable("borrowerID") Integer userID){
        List<RequestDto> getOwnerDeltails = this.requestService.getRequestsBorrower(userID);

        return new ResponseEntity<>(getOwnerDeltails, HttpStatus.CREATED);
    }

    //Delete
    @DeleteMapping("/{requestID}")
    public ResponseEntity<ApiResponse> deleteRequest(@PathVariable("requestID") Integer uid){
        this.requestService.deleteRequest(uid);
        return new ResponseEntity<ApiResponse>(new ApiResponse("request Deleted", true),HttpStatus.OK);
    }

    //Get
    @GetMapping("/")
    public ResponseEntity<List<RequestDto>> getAllrequests(){
        return ResponseEntity.ok(this.requestService.getAllRequests());
    }

    //Get - request

    @GetMapping("/{requestID}")
    public ResponseEntity<RequestDto> getSinglerequest(@PathVariable("requestID") Integer uid){
        return ResponseEntity.ok(this.requestService.getRequestById(uid));
    }

}