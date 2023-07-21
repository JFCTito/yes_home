package com.g14.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
// import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AdvertiseTest {

    private Advertise advertise;
    private Profile profile;

    @BeforeEach
    public void setup() {

        advertise = new Advertise();
        advertise.setId(1);
        advertise.setTitle("Sample Title");
        advertise.setLocalitation("Sample Location");
        advertise.setPrice(1000.0);
        advertise.setMts2(150.0);
        advertise.setCategory("Sample Category");
        advertise.setImg("sample.jpg");
        advertise.setRooms(3);
        advertise.setType("Sample Type");

        profile = mock(Profile.class);
        profile.setId(100);
        profile.setName("testuser");

        advertise.setProfile(profile);
    }

    @Test
    public void testAdvertiseAttributes() {
        assertEquals(1, advertise.getId());
        assertEquals("Sample Title", advertise.getTitle());
        assertEquals("Sample Location", advertise.getLocalitation());
        assertEquals(1000.0, advertise.getPrice(), 0.001);
        assertEquals(150.0, advertise.getMts2(), 0.001);
        assertEquals("Sample Category", advertise.getCategory());
        assertEquals("sample.jpg", advertise.getImg());
        assertEquals(3, advertise.getRooms());
        assertEquals("Sample Type", advertise.getType());
    }
}
