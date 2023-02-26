import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  @Input() chart:boolean = false;
  @Input() progress:number = 0;
  @Input() totalCount:number = 0;
  @Input() colorCode:string = "000";
  @Input() text:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
