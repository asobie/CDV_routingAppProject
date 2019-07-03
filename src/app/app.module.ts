import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { TrackComponent } from "./track/track.component";
import { SchedulesComponent } from "./schedules/schedules.component";
import { AboutComponent } from "./about/about.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoginComponent } from "./login/login.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { DataService } from "./data.service";
import { SolutionsComponent } from "./solutions/solutions.component";
import { LoggedInComponent } from "./logged-in/logged-in.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "solutions",
    component: SolutionsComponent
  },
  {
    path: "navigation",
    component: NavigationComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "track",
    component: TrackComponent
  },
  {
    path: "schedules",
    component: SchedulesComponent
  },
  {
    path: "loggedIn",
    component: LoggedInComponent
  },
  {
    path: "404",
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TrackComponent,
    SchedulesComponent,
    AboutComponent,
    NavigationComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserComponent,
    SolutionsComponent,
    LoggedInComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
