package com.vashista.coolstuff.controller;

import com.vashista.coolstuff.model.Article;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ArticleController {

    @GetMapping("/api/articles")
    public List<Article> getArticles() throws IOException {
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource[] resources = resolver.getResources("classpath:articles/*.md");
        return Arrays.stream(resources)
                .map(resource -> {
                    String filename = resource.getFilename();
                    String slug = filename.replace(".md", "");
                    String title = slug.replace("-", " ");
                    title = Arrays.stream(title.split(" "))
                            .map(word -> Character.toUpperCase(word.charAt(0)) + word.substring(1))
                            .collect(Collectors.joining(" "));
                    String content;
                    try {
                        content = new String(Files.readAllBytes(Paths.get(resource.getURI())));
                    } catch (IOException e) {
                        content = "";
                    }
                    String description = content.length() > 100 ? content.substring(0, 100) + "..." : content;
                    String author = "Vashista Basava";
                    String readTime = String.valueOf((int) Math.ceil(content.split("\\s+").length / 200.0))
                            + " min read";
                    String imageUrl = "assets/images/" + slug + "/main.png";
                    if ("aws-glacier-backup".equals(slug)) {
                        imageUrl = "assets/images/aws-glacier-backup/main.png";
                    }

                    return new Article(slug, title, null, imageUrl, description, author, readTime);
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/api/articles/{slug}")
    public Article getArticle(@PathVariable String slug) throws IOException {
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource resource = resolver.getResource("classpath:articles/" + slug + ".md");
        String content = new String(Files.readAllBytes(Paths.get(resource.getURI())));
        String title = slug.replace("-", " ");
        title = Arrays.stream(title.split(" "))
                .map(word -> Character.toUpperCase(word.charAt(0)) + word.substring(1))
                .collect(Collectors.joining(" "));
        String imageUrl = "assets/images/" + slug + "/main.png";
        if ("aws-glacier-backup".equals(slug)) {
            imageUrl = "assets/images/aws-glacier-backup/main.png";
        }
        String description = content.length() > 100 ? content.substring(0, 100) + "..." : content;
        String author = "Vashista Basava";
        String readTime = String.valueOf((int) Math.ceil(content.split("\\s+").length / 200.0)) + " min read";
        return new Article(slug, title, content, imageUrl, description, author, readTime);
    }
}
