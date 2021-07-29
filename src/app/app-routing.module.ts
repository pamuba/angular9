import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepListComponent } from './dep-list/dep-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'', redirectTo:'/departments', pathMatch:'full'},
  {path:'departments', component:DepListComponent},
  {path:'departments/:id', component:EmpListComponent},
  {path:'employees', component:EmpListComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageNotFoundComponent,DepListComponent, EmpListComponent]
