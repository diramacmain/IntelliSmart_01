import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferingElaboratedComponent } from './offering-elaborated/offering-elaborated.component';
import { ProductsAndSolutionsComponent } from './products-and-solutions/products-and-solutions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SystemComponentsComponent } from './system-components/system-components.component';
import { QualityFocusComponent } from './quality-focus/quality-focus.component';
import { UtilitiesDifferenceComponent } from './utilities-difference/utilities-difference.component';
import { IntelliFooterComponent } from './intelli-footer/intelli-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferingElaboratedComponent,
    ProductsAndSolutionsComponent,
    AboutUsComponent,
    SystemComponentsComponent,
    QualityFocusComponent,
    UtilitiesDifferenceComponent,
    IntelliFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
