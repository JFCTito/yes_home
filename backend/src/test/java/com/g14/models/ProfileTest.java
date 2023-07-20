package com.g14.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
// import static org.mockito.Mockito.mock;
// import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ProfileTest {

    private Profile profile;

    @BeforeEach
    public void setup() {
        
        profile = new Profile();
        profile.setId(1);
        profile.setMail("test@example.com");
        profile.setPw("password");
        profile.setName("John");
        profile.setLastName("Doe");

        List<Advertise> advertises = new ArrayList<>();
        Advertise advertise1 = new Advertise();
        advertise1.setId(101);
        advertise1.setTitle("Sample Ad 1");
        Advertise advertise2 = new Advertise();
        advertise2.setId(102);
        advertise2.setTitle("Sample Ad 2");

        advertises.add(advertise1);
        advertises.add(advertise2);

        profile.setAdvertises(advertises);
    }

    @Test
    public void testProfileAttributes() {
        assertEquals(1, profile.getId());
        assertEquals("test@example.com", profile.getMail());
        assertEquals("password", profile.getPw());
        assertEquals("John", profile.getName());
        assertEquals("Doe", profile.getLastName());
    }

    @Test
    public void testProfileAdvertises() {
        assertNotNull(profile.getAdvertises());
        assertEquals(2, profile.getAdvertises().size());
    }
}