///<reference path="accueil/accueil.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ViewComponent } from './view/view.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import {DataService} from './data.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: '', component: AccueilComponent},
  { path: 'region/:id/:lat/:long', component: ViewComponent},
  { path: 'detail', component: DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ViewComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
