package com.practicedailycode.employee.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String firstName;
    private String lastName;
    private String emailId;
}
