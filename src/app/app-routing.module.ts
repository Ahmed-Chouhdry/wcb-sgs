import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { TabesComponent } from './tabes/tabes.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeCard1Component } from './home-card1/home-card1.component';
import { HomeCard2Component } from './home-card2/home-card2.component';
import { LabsComponent } from './labs/labs.component';
import { HomeAboutComponent } from './home-about/home-about.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"careers", component: CareersComponent},
  {path:"news", component: NewsComponent},
  {path:"contact", component: ContactComponent},
  {path:"search", component: SearchComponent},
  {path:"tabes", component: TabesComponent},
  {path:"verify", component: VerifyComponent},
  {path:"home-card", component: HomeCardComponent},
  {path:"home-card1", component: HomeCard1Component},
  {path:"home-card2", component: HomeCard2Component},
  {path:"labs", component: LabsComponent},
  {path:"home-about", component: HomeAboutComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
