import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { DbserviceService } from '../dbservice.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  myData:any;
  // multi: any[];
  // view: any[] = [700, 400];
  arrm={};
  arrw={};
  count={};
  barChartLabels:Label[] ;
  public barChartData: ChartDataSets[];
  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'men' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'women' }
  // ]; 
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  constructor(private db:DbserviceService) {}
  
  ngOnInit(): void {
    // //פילוח לפי מין מספר מקומות ישיבה -column chart
  this.myData = this.db.returndata();
  this.myData.forEach(element => {
    this.count[element.amount_seat]=(this.count[element.amount_seat] || 0) + 1;
    this.arrm[element.amount_seat]=(this.arrm[element.amount_seat] || 0);
    this.arrw[element.amount_seat]=(this.arrw[element.amount_seat] || 0);
    if(element.Gender===0){
      this.arrm[element.amount_seat]=(this.arrm[element.amount_seat] || 0) + 1;
    }
    else if(element.Gender===1){
      this.arrw[element.amount_seat]=(this.arrw[element.amount_seat] || 0) + 1;
    }
  });

  console.log();
  this.barChartLabels= Object.keys(this.count) ;
  this.barChartData= [{data:Object.values(this.arrw) as SingleDataSet , label:'femal'},
  {data: Object.values(this.arrm) as SingleDataSet , label:'male'}];
  }


}
