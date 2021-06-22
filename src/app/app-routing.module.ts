import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';
import { Modernform1Component } from './modernform1/modernform1.component';
import { TodoComponent } from './todo/todo.component';
import { CustlistComponent } from './custlist/custlist.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { DeplistComponent } from './deplist/deplist.component';
import { DepdetailsComponent } from './depdetails/depdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AnimationComponent } from './animation/animation.component';
import{ PageNotFoundComponent} from './PageNotFound.component';
import { MaterialComponent } from './material/material.component';
import { Material1Component } from './material1/material1.component';


const routes: Routes = [
    {path:'template', component:TemplateformComponent},
    {path:'modernform1', component:Modernform1Component},
    {path:'todo', component:TodoComponent},
    {path:'custlist', component:CustlistComponent},
    {path:'custdetails', component:CustdetailsComponent},
    {path:'department',component:DeplistComponent},
    {path:'depdetails/:id/:name/:version/:img',component:DepdetailsComponent},
    {path:'userlist',component:UserlistComponent},
    {path:'userdetails',component:UserdetailsComponent},    
    {path:'animation',component:AnimationComponent},
    {path:'material',component:MaterialComponent},
    {path:'material1',component:Material1Component},
    
    {path:'**', component:PageNotFoundComponent }
    
    
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[TemplateformComponent,Modernform1Component,
  TodoComponent,CustlistComponent,CustdetailsComponent,DeplistComponent,
  DepdetailsComponent,UserlistComponent,UserdetailsComponent, AnimationComponent,MaterialComponent,Material1Component];
