import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from "ngx-markdown";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { QuoteOfTheDayComponent } from "./quote-of-the-day/quote-of-the-day.component";
import { DarkModeToggleComponent } from "./dark-mode-toggle/dark-mode-toggle.component";
import { EatCodeWorkoutSleepComponent } from "./eat-code-workout-sleep/eat-code-workout-sleep.component";
import { GameOfLifeComponent } from "./game-of-life/game-of-life.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "articles/:slug", component: ArticleDetailComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EatCodeWorkoutSleepComponent,
    DarkModeToggleComponent,
    QuoteOfTheDayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    ArticleListComponent,
    ArticleDetailComponent,
    MatToolbarModule,
    AboutComponent,
    GameOfLifeComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
