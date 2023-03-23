import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { ForumMainComponent } from './forum/forum-main/forum-main.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumQuestionComponent } from './forum/forum-question/forum-question.component';
import { HotQuestionsComponent } from './forum/hot-questions/hot-questions.component';
import { ForumSideBarComponent } from './forum/forum-side-bar/forum-side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewQuestionComponent } from './forum/new-question/new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    HeaderNavComponent,
    ForumMainComponent,
    ProfileComponent,
    ForumQuestionComponent,
    HotQuestionsComponent,
    ForumSideBarComponent,
    NewQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
