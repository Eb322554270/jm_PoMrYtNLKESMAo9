import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DbserviceService } from '../dbservice.service';
@Component({
  selector: 'app-pipechartdata',
  templateUrl: './pipechartdata.component.html',
  styleUrls: ['./pipechartdata.component.css']
})
export class PipechartdataComponent implements OnInit {
   // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public data: any;
  public myData:any;
  counts = {};
  pieChartLabels:Label[] ;
  pieChartData:SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(private db:DbserviceService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.myData = this.db.returndata();
    this.myData.forEach(r => {
      r.Hobbies.forEach(hob => {
        this.counts[hob] = (this.counts[hob] || 0) + 1;
      }); 
    });
    this.pieChartLabels= Object.keys(this.counts);
    this.pieChartData= Object.values(this.counts) as SingleDataSet; 
 }

}







