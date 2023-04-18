import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './RH/edit/edit.component';
import { AddComponent } from './RH/add/add.component';
import { SearchComponent } from './RH/search/search.component';
import { DetailsComponent } from './RH/details/details.component';

const routes: Routes = [
  {path: '', component:SearchComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit/:id', component:EditComponent},
  {path: 'details/:id', component:DetailsComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
