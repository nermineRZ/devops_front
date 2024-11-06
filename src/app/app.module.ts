// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here

import { AppRoutingModule } from './app-routing.module';
import { AddSkierComponent } from './add-skier/add-skier.component';
import { ListSkierComponent } from './list-skier/list-skier.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AddSkierComponent,
    ListSkierComponent,
    AppComponent
    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // <-- Add FormsModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
