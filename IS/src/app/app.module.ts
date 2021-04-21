import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { OfferingElaboratedComponent } from './offering-elaborated/offering-elaborated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    OfferingElaboratedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
