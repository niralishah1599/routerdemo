import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss']
})
export class StockUpdateComponent implements OnInit, OnChanges {

  @Input() productDetail: any;
  @Input() stock: number;
  @Input() fromComp: string;
  
  quantity: number = 1;
  gradeValue: string;
  divcolor: string;
  colortag: string;
  width1: string = "2000px";
  status: string;
  constructor() { }

  ngOnInit() {} 

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.fromComp);
    if (changes.stock.currentValue != changes.stock.previousValue) {
      if (this.productDetail.stock <= 10) {
        this.divcolor = "red";
        this.colortag = "Low";

      }
      if (this.productDetail.stock > 10 && this.productDetail.stock < 20) {
        this.divcolor = "yellow";
        this.colortag = "Average";


      }
      if (this.productDetail.stock >= 20) {
        this.divcolor = "green";
        this.colortag = "High";


      }
    }
  }
}
