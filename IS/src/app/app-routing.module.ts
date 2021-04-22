import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {OfferingElaboratedComponent} from './offering-elaborated/offering-elaborated.component';
import {ProductsAndSolutionsComponent} from './products-and-solutions/products-and-solutions.component';
const routes: Routes = [ 
{path:'', component:HomeComponent},
{path:'list', component:ListComponent},
{path:'offering-elaborated', component:OfferingElaboratedComponent},
{path:'products-and-solutions', component:ProductsAndSolutionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
