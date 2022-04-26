package com.swapbookx.api.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class UserDto {
    private int id;
    private String name;
    private String email;
    private String password;
}
