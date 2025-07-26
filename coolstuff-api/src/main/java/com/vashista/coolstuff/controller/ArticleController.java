package com.vashista.coolstuff.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vashista.coolstuff.model.Article;

@RestController
public class ArticleController {

    @GetMapping("/api/articles")
    public List<Article> getArticles() {
        // TODO: Replace with actual articles from LinkedIn or database
        return Arrays.asList(
            new Article(1L, "First Article Title", "https://www.linkedin.com/", "Summary of first article."),
            new Article(2L, "Second Article Title", "https://www.linkedin.com/", "Summary of second article.")
        );
    }
}
