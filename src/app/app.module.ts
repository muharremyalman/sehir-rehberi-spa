import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {appRoutes} from './routes'


import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import {CityDetailComponent} from './city/city-detail/city-detail.component'

@NgModule({
  declarations: [			
    AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
