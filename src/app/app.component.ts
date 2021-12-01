import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from './dbservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{

constructor(private db:DbserviceService,private route:Router){}
ngoninit(){
}  
  
join(){
  this.route.navigate(['details-customer'])
}

graph(){
  this.route.navigate(['graph'])
}


}

