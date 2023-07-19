package com.g14.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Advertise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_anuncio")
    public int id;

    @Column(name = "titulo")
    public String title;
    @Column(name="localizacion")
    public String localitation;
    @Column(name = "precio")
    public double price;
    @Column(name = "metros")
    public double mts2;
    @Column(name = "categoria")
    public String category;
    @Column(name = "imagen")
    public String img;
    @Column(name = "habitaciones")
    public int rooms;
    @Column(name = "tipo")
    public String type;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="fk_user", nullable = false)
    private Profile profile;

}
