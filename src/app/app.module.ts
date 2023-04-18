import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './RH/listar/listar.component';
import { AddComponent } from './RH/add/add.component';
import { EditComponent } from './RH/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './RH/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterRhPipe } from './Pipes/filter-rh.pipe';
import { EmployeeService } from './Service/employees.service';
import { DetailsComponent } from './RH/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    SearchComponent,
    FilterRhPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
