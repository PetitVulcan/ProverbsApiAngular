import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProverbsListComponent } from './proverbs-list/proverbs-list.component';
import { ProverbsAddComponent } from './proverbs-add/proverbs-add.component';
import { Routes } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    ProverbsListComponent,
    ProverbsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
