package com.vashista.coolstuff.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/zenquotes")
public class ZenQuotesController {
    private final RestTemplate restTemplate = new RestTemplate();
    private static final String ZEN_QUOTES_URL = "https://zenquotes.io/api/random";

    @GetMapping("/random")
    public ResponseEntity<String> getRandomQuote() {
        String response = restTemplate.getForObject(ZEN_QUOTES_URL, String.class);
        return ResponseEntity.ok(response);
    }
}
