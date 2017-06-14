import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HHeaderComponent } from './hheader/hheader.component';

import 'hammerjs';
import { BorrowComponent } from './borrow/borrow.component';
import { HomeComponent } from './home/home.component';
import { SiteMenuService } from './site-menu.service';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';

import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { HfooterComponent } from './hfooter/hfooter.component';
import { HomeStatsComponent } from './home-stats/home-stats.component';
import { CountoModule }  from 'angular2-counto';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { SideMenuComponent } from './side-menu/side-menu.component';



const appRoutes: Routes = [
  
  { path: 'borrow', component: BorrowComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HHeaderComponent,
    BorrowComponent,
    HomeComponent,
    MegaMenuComponent,
    ModalComponent,
    HfooterComponent,
    HomeStatsComponent,
    HomeSliderComponent,
    SideMenuComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule,
    CountoModule
  ],
  providers: [ SiteMenuService, ModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
