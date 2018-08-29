import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    ReactiveFormsModule ,
    NgxGalleryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
