import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepListComponent } from './dep-list/dep-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';


const routes: Routes = [
  {path:'departments', component:DepListComponent},
  {path:'employees', component:EmpListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepListComponent, EmpListComponent]
