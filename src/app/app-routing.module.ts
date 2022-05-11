import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
 
import { Aula00Component } from "./aula00/aula00.component";
import { Aula01Component } from "./aula01/aula01.component"; 
import { Aula02Component } from "./aula02/aula02.component";

const APP_ROUTES: Routes= [
    {path:'' , component: Aula00Component},
    {path:'aula00' , component: Aula00Component}, 
    {path:'aula01' , component: Aula01Component}, 
    {path:'aula02' , component: Aula02Component}, 
]

@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
