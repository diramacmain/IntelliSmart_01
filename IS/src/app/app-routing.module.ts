import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {OfferingElaboratedComponent} from './offering-elaborated/offering-elaborated.component';
import {ProductsAndSolutionsComponent} from './products-and-solutions/products-and-solutions.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {QualityFocusComponent} from './quality-focus/quality-focus.component';
import {SystemComponentsComponent} from './system-components/system-components.component';
import {UtilitiesDifferenceComponent} from './utilities-difference/utilities-difference.component';

const routes: Routes = [ 
{path:'', component:HomeComponent},
{path:'offering-elaborated', component:OfferingElaboratedComponent},
{path:'products-and-solutions', component:ProductsAndSolutionsComponent},
{path:'about-us',component:AboutUsComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'quality-focus',component:QualityFocusComponent},
{path:'system-components',component:SystemComponentsComponent},
{path:'utilities-difference',component:UtilitiesDifferenceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
