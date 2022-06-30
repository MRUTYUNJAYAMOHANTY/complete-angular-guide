import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './TemplateDrivenForm/template-driven/template-driven.component';
import { PracticeTdComponent } from './TemplateDrivenForm/Practicing/practice-td/practice-td.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    PracticeTdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
