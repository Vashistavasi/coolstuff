package com.vashista.coolstuff.model;

public class Article {
    private String slug;
    private String title;
    private String content;
    private String imageUrl;
    private String description;
    private String author;
    private String readTime;

    public Article() {
    }

    public Article(String slug, String title, String content, String imageUrl, String description, String author,
            String readTime) {
        this.slug = slug;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.description = description;
        this.author = author;
        this.readTime = readTime;
    }

    // Getters and Setters

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getReadTime() {
        return readTime;
    }

    public void setReadTime(String readTime) {
        this.readTime = readTime;
    }
}
