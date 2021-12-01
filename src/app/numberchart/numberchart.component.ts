import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-numberchart',
  templateUrl: './numberchart.component.html',
  styleUrls: ['./numberchart.component.css']
})
export class NumberchartComponent implements OnInit {
  a: any;
  counts= {};
  myData: any;
  view: any[] ;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';
  constructor(private db:DbserviceService) { 

}

  ngOnInit() {
    this.myData = this.db.returndata();
    this.myData.forEach(r => {
        this.counts[r.Motor] = (this.counts[r.Motor] || 0) + 1;  
    });

    // this.a=[{name:'electric',value:4}],[{name:'fuel',value:6}]
    this.a=Object.entries(this.counts).map(([key, val])=>({name:key, value:val}));
    console.log();
  }
  onSelect(event) {
    console.log(event);
  }
}
