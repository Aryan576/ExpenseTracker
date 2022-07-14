import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AddexpenseComponent } from './expense/addexpense/addexpense.component';
import { CategoryexpenseComponent } from './expense/categoryexpense/categoryexpense.component';
import { DailyexpenseComponent } from './expense/dailyexpense/dailyexpense.component';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { MonthlyexpenseComponent } from './expense/monthlyexpense/monthlyexpense.component';
import { YearlyexpenseComponent } from './expense/yearlyexpense/yearlyexpense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    AddexpenseComponent,
    CategoryexpenseComponent,
    DailyexpenseComponent,
    ExpensesComponent,
    MonthlyexpenseComponent,
    YearlyexpenseComponent,
    DashboardComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
