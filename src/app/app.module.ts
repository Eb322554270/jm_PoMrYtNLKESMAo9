import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { arrpath } from './path';
import {MatCardModule} from '@angular/material/card';
import { GraphComponent } from './graph/graph.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberchartComponent } from './numberchart/numberchart.component';
import { ChartsModule } from 'ng2-charts';
import { PercentvisitorComponent } from './percentvisitor/percentvisitor.component';
import { PipechartdataComponent } from './pipechartdata/pipechartdata.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SuccesdComponent } from './succesd/succesd.component';
import { SelectBirthdateComponent } from './select-birthdate/select-birthdate.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    DetailsCustomerComponent,
    PipechartdataComponent,
    GraphComponent,
    BarchartComponent,
    TableComponent,
    NumberchartComponent,
    PercentvisitorComponent,
    SuccesdComponent,
    SelectBirthdateComponent
    
    //  PipechartdataComponent
   // SearchComponent,
   // ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(arrpath),
    MatCardModule,MatFormFieldModule,NgxChartsModule,MatTableModule,ReactiveFormsModule,ChartsModule 
    , MatTabsModule,MatToolbarModule,MatNativeDateModule
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
