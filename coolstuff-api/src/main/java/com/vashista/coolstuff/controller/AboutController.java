package com.vashista.coolstuff.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AboutController {

    @GetMapping("/api/about")
    public Map<String, String> getAbout() throws IOException {
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource resource = resolver.getResource("classpath:about.md");
        String content = new String(Files.readAllBytes(Paths.get(resource.getURI())));

        Map<String, String> about = new HashMap<>();
        about.put("description", content);
        return about;
    }
}
