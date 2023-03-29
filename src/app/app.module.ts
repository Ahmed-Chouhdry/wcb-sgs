import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { TabesComponent } from './tabes/tabes.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeCard1Component } from './home-card1/home-card1.component';
import { HomeCard2Component } from './home-card2/home-card2.component';
import { LabsComponent } from './labs/labs.component';
import { HomeAboutComponent } from './home-about/home-about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CareersComponent,
    NewsComponent,
    SearchComponent,
    ContactComponent,
    TabesComponent,
    VerifyComponent,
    HomeCardComponent,
    HomeCard1Component,
    HomeCard2Component,
    LabsComponent,
    HomeAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
