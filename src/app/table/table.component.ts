import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  myData: any;
  a: any;
  counts= {};
  counts2= {};
  counts3= {};
  dataSource: any;
  displayedColumns: string[] =[];
  constructor(private db:DbserviceService) { }
  ngOnInit() {
    this.myData =this.db.returndata();
    this.myData.forEach(r => {
        this.counts[r.city] = ((this.counts[r.city] || 0) + Number(r.amount_seat));
        this.counts2[r.city] = ((this.counts2[r.city] || 0) + 1);
        this.counts3[r.city]= Math.round((this.counts[r.city] || 0)/(this.counts2[r.city] || 0))
    });
   this.a= Object.entries(this.counts3).map(([key, val])=>({name:key, value:val}))
   console.log()
   this.displayedColumns = ['position', 'name', 'value'];
   this.dataSource = new MatTableDataSource(this.a);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
