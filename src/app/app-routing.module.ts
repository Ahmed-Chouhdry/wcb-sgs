import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { TabesComponent } from './tabes/tabes.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"careers", component: CareersComponent},
  {path:"news", component: NewsComponent},
  {path:"contact", component: ContactComponent},
  {path:"search", component: SearchComponent},
  {path:"tabes", component: TabesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
