package com.g14.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_profile")
    public int id;
    @Column(name = "mail")
    public String mail;
    @Column(name = "password")
    public String pw;
    @Column(name = "name")
    public String name;
    @Column(name = "lastName")
    public String lastName;

    @OneToMany(mappedBy = "profile")
    public List<Advertise> advertises;


}
