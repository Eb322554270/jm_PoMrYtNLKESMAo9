import { Injectable } from '@angular/core';
import { detailsCustomer } from './classes/detailsCustomer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
data:any;
flagg:boolean;
mone:any;
myData:any;

constructor(private http:HttpClient) { }


//   addcustomer(customer:detailsCustomer ){
//   return this.http.post("/api/customer",customer);
// }

  addcustomer(customer: detailsCustomer){
    this.data = JSON.parse(localStorage.getItem('myLSkey'));
    if(this.data===null){
      this.data=[];
    }
    this.data=[...this.data,customer];
    localStorage.setItem('myLSkey', JSON.stringify(this.data));
    
  }

addvisitor(){
  this.flagg = JSON.parse(localStorage.getItem('flag'));
    if(this.flagg===false){
    this.mone= JSON.parse(localStorage.getItem('monevisitor'));
    this.mone= this.mone+1;
    localStorage.setItem('monevisitor', JSON.stringify(this.mone));
    this.flagg= true;
    localStorage.setItem('flag' , JSON.stringify(this.flagg))
    }
}
returndata(){
 return this.myData = JSON.parse(localStorage.getItem('myLSkey'));

}
returnvisitor(){
 return (JSON.parse(localStorage.getItem('monevisitor')));
}
}

