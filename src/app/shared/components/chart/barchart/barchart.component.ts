import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  @ViewChild("barchart") barchart: ElementRef | undefined

  constructor() { }

  ngOnInit(): void {
  }
  makeChart(){
    
  }

}
