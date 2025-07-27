import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "./model/article";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  private articlesUrl = "/api/articles";

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticle(slug: string): Observable<Article> {
    return this.http.get<Article>(`${this.articlesUrl}/${slug}`);
  }
}
