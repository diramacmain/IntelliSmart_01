import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as data from "src/assets/products.json";

@Component({
  selector: 'app-products-and-solutions',
  templateUrl: './products-and-solutions.component.html',
  styleUrls: ['./products-and-solutions.component.scss']
})
export class ProductsAndSolutionsComponent implements OnInit {

  i0 = 0;
  i1 = 1;
  i2 = 2;
  i3 = 3;
  i4 = 4;
  i5 = 5;
  i6 = 6;
  constructor(private route: ActivatedRoute) { 
  }
  
 checkInfo(t:number = 0){
   if(t == this.i0){
    alert(data[0].paragraph)
   }
   if(t == this.i1){
    console.log(data[0].paragraph)
   }
   if(t == this.i2){

  }
  if(t == this.i3){

  }
  if(t == this.i4){

  }  
  if(t == this.i5){

  }
  }

  ngOnInit(): void {

  }

  

}
