package com.swapbookx.api.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class LoginDto {
    
    private String userName;
    private String password;
    

}
