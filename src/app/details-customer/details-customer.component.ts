import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { detailsCustomer } from '../classes/detailsCustomer';
import { DbserviceService } from '../dbservice.service';
import {MatSelectionList} from '@angular/material/list'
import { SelectBirthdateComponent } from '../select-birthdate/select-birthdate.component';
@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {
email = new FormControl('', [Validators.required, Validators.email]);
name1 = new FormControl('', [Validators.required, Validators.pattern("[a-z ]*")]);
city1 = new FormControl('', [Validators.required, Validators.pattern("[a-z ]*")]);
street1 = new FormControl('', [Validators.required, Validators.pattern("[a-z ]*")]);
country1 = new FormControl('', [Validators.required, Validators.pattern("[a-z ]*")]);
gender1 = new FormControl('', [Validators.required]);
motor1 = new FormControl('', [Validators.required]);
seat1 = new FormControl('', [Validators.required]);
hobby1 = new FormControl('', [Validators.required]);
date1 = new FormControl('', [Validators.required]);
color1 = new FormControl('', [Validators.required]);
data:any;
mone:any;
address1Field: HTMLInputElement;
loginForm: FormGroup;
// customer:detailsCustomer=new detailsCustomer;
customer: detailsCustomer={
     name:"",
     city:"",
     street:"",
     country:"", 
     Gender:"",
     email:"",
     Birth_date:new Date(),
     favorite_color:"",
     amount_seat:0,
     Motor:"",
     Hobbies:[],
}
maxdate=new Date().getDate()-18;
toppings = new FormControl();
toppingList: string[] = ['sew', 'bake', 'read', 'draw', 'Learn'];
states: string[] = ['male','femal'];
motors: string[] = ['electric','fuel'];
seats:number[]=[2,3,4,5,6,7];
dbservice: any;
  constructor(private db:DbserviceService,private route:Router) { 
    this.db.addvisitor();
  }

  ngOnInit() {
  }

  onsubmit(){
    let a=this.db.addcustomer(this.customer);
    this.route.navigate(['datails-customer/succesd'])
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessage2() {
    if (this.name1.hasError('required')) {
      return 'You must enter a value ';
    }
    return this.name1.hasError('pattern') ? 'not pattern' : '';
  }

  getErrorMessage3() {
    if (this.city1.hasError('required')) {
      return 'You must enter a value ';
    }
    return this.city1.hasError('pattern') ? 'not pattern' : '';
  }

  getErrorMessage4() {
    if (this.street1.hasError('required')) {
      return 'You must enter a value ';
    }
    return this.street1.hasError('pattern') ? 'not pattern' : '';
  }
  getErrorMessage5() {
    if (this.country1.hasError('required')) {
      return 'You must enter a value ';
    }
    return this.country1.hasError('pattern') ? 'not pattern' : '';
  }

  getErrorMessage6() {
    if (this.gender1.hasError('required')) {
      return 'You must enter a value';
    }
    return 1;
  }
  getErrorMessage7() {
    if (this.motor1.hasError('required')) {
      return 'You must enter a value';
    }
    return 1;
  }

  getErrorMessage8() {
    if (this.seat1.hasError('required')) {
      return 'You must enter a value';
    }
    return 1;
  }

  getErrorMessage9() {
    if (this.hobby1.hasError('required')) {
      return 'You must enter a value';
    }
    return 1;
  }

  getErrorMessage10() {
    if (this.date1.hasError('required')) {
      return 'You must enter a value';
    }
    return 1;
  }
  getErrorMessage11() {
    if (this.color1.hasError('required')) {
      return 'You must enter a value';
    }
    return 1;
  }
 
}
