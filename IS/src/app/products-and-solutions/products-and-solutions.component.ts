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
  
 checkInfo(t:number){
   let myData = data[t]?.title;
      alert(myData)
  }

  ngOnInit(): void {
    this.checkInfo
  }

  

}
