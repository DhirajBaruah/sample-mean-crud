import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOfPeopleComponent} from './components/list-of-people/list-of-people.component'
import {CreatePeopleComponent} from './components/create-people/create-people.component'
import {EditPeopleComponent} from './components/edit-people/edit-people.component'

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
 {
  path: 'home',  component: ListOfPeopleComponent
},{
  path: 'create-people',  component: CreatePeopleComponent
},
{
  path: 'edit-people/:personId',  component: EditPeopleComponent
},
{
  path: '**', redirectTo: 'home'
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
