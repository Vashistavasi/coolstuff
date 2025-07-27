import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AboutService {
  private aboutUrl = "/api/about";

  constructor(private http: HttpClient) {}

  getAbout(): Observable<{ description: string }> {
    return this.http.get<{ description: string }>(this.aboutUrl);
  }
}
