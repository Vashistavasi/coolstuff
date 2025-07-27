import { Component, OnInit } from "@angular/core";
import { Article } from "../model/article";
import { ArticleService } from "../article.service";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-article-list",
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }

  navigateToArticle(slug: string): void {
    this.router.navigate(["/articles", slug]);
  }
}
