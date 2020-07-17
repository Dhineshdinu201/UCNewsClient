import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsContainerComponent } from './news-container/news-container.component';
import { ImageComponent } from './news-container/image/image.component';
import { ReadmoreComponent } from './news-container/readmore/readmore.component';



const routes: Routes = [
  {path:'news-container', component:NewsContainerComponent},
  {path:'image' , component:ImageComponent},
  {path:'readmore' , component:ReadmoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
