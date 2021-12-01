import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-percentvisitor',
  templateUrl: './percentvisitor.component.html',
  styleUrls: ['./percentvisitor.component.css']
})
export class PercentvisitorComponent implements OnInit {
  mone:any;
  data:any;
  num:number=0;
  count={};
  a:any[]=[0];
  colorScheme = {
    domain: ['#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';
  precentvisitor:any;

  constructor(private db:DbserviceService) { }

  ngOnInit(): void {
    this.mone = this.db.returnvisitor();
    this.data = this.db.returndata();
    if(this.data===null){
      this.data=[];
    }
    this.num= this.data.length;
    this.precentvisitor= ((this.num/this.mone)*100);
    this.count['precent %']= (Math.round(this.precentvisitor));
    this.a= Object.entries(this.count).map(([key, val])=>({name:key, value:val}));
    console.log();
  }
  onSelect(event) {
    console.log(event);
  }

}

