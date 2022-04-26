package com.swapbookx.api.controllers;

import com.swapbookx.api.payloads.RequestDto;
import com.swapbookx.api.services.RequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @PostMapping("/")
    public ResponseEntity<RequestDto> createRequest(@RequestBody RequestDto requestDto) {
        RequestDto createRequestDto = this.requestService.createRequest(requestDto);

        return new ResponseEntity<>(createRequestDto, HttpStatus.CREATED);
    }

}