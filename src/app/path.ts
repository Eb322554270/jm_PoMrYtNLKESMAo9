import { Routes } from "@angular/router";
import { DetailsCustomerComponent } from "./details-customer/details-customer.component";
import { GraphComponent } from "./graph/graph.component";
import { PipechartdataComponent } from "./pipechartdata/pipechartdata.component";
import { SuccesdComponent } from "./succesd/succesd.component";

export const arrpath:Routes=[
    {
        path:"datails-customer/graph",
        component:GraphComponent
    },
    {
        path:"pipechartdata",
        component:PipechartdataComponent
    },
    {
        path:"graph",
        component:GraphComponent
    },
    {
        path: "details-customer",
        component:DetailsCustomerComponent
    },
    {
        path: "datails-customer/succesd",
        component:SuccesdComponent
    } 
]