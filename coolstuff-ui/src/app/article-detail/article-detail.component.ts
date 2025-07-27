import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../model/article";
import { ArticleService } from "../article.service";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";

@Component({
  selector: "app-article-detail",
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.css"],
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.articleService
        .getArticle(slug)
        .subscribe((article) => (this.article = article));
    }
  }
}
