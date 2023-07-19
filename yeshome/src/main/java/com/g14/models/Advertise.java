package com.g14.models;



import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "advertisments")
public class Advertise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_advertise")
    public int id;

    @Column(name = "title")
    public String title;
    @Column(name="localitation")
    public String localitation;
    @Column(name = "price")
    public double price;
    @Column(name = "mts2")
    public double mts2;
    @Column(name = "category")
    public String category;
    @Column(name = "image")
    public String img;
    @Column(name = "rooms")
    public int rooms;
    @Column(name = "type")
    public String type;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="fk_user", nullable = false)
    @JsonIgnore
    private Profile profile;

}
