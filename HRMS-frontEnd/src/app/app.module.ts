import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path :'employees', component:EmployeeListComponent}
  ];
@NgModule({
  declarations: [AppComponent, EmployeeListComponent],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
