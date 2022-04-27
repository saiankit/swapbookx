package com.swapbookx.api.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userID;

    @Column(name="user_name", nullable = false)
    private String userName;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="user_email", nullable = false)
    private String email;

    @Column(name="user_password", nullable = false)
    private String password;

    @Column(name="user_address", nullable = false)
    private String address;

    @Column(name="user_phoneNumber", nullable = false)
    private String phoneNumber;

    @Column(name="user_isAdmin")
    private Boolean isAdmin;

}
