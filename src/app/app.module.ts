import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HighchartsChartModule} from 'highcharts-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LinechartComponent } from './components/linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
