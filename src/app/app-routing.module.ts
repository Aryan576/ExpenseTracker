import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddexpenseComponent } from './expense/addexpense/addexpense.component';
import { CategoryexpenseComponent } from './expense/categoryexpense/categoryexpense.component';
import { DailyexpenseComponent } from './expense/dailyexpense/dailyexpense.component';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { MonthlyexpenseComponent } from './expense/monthlyexpense/monthlyexpense.component';
import { YearlyexpenseComponent } from './expense/yearlyexpense/yearlyexpense.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addexpense',component:AddexpenseComponent},
  {path:'dailyexpense',component:DailyexpenseComponent},
  {path:'monthlyexpense',component:MonthlyexpenseComponent},
  {path:'yearlyexpense',component:YearlyexpenseComponent},
  // {path:'weeklyexpense',component:WeeklyexpenseComponent},
  {path:'categoryexpense',component:CategoryexpenseComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'expenses',component:ExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
