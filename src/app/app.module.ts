import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsContainerComponent } from './news-container/news-container.component';
import { ImageComponent } from './news-container/image/image.component';
import { ReadmoreComponent } from './news-container/readmore/readmore.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsContainerComponent,
    ImageComponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
