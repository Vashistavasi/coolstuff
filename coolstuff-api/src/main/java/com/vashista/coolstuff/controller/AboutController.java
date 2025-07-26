package com.vashista.coolstuff.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutController {

    @GetMapping("/api/about")
    public Map<String, String> getAbout() {
        Map<String, String> about = new HashMap<>();
        about.put("description", "This is Vashista's portfolio site. Update this description to introduce yourself.");
        return about;
    }
}
