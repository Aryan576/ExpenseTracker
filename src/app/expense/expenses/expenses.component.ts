import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expense:{}
  constructor(private category:CategoryService,private toastr: ToastrService,public service:LoginService,private expenseservice:ExpenseService) { }

  ngOnInit(): void {
    this.futureDateDisabled()

    this.expenseservice.listexpsense(this.service.users.userid).then(res=>{
        this.expense=res.data
       
        
    })
  }

  maxDate:any;

  futureDateDisabled(){
    var dtToday:any = new Date();

    var month:any = dtToday.getMonth() + 1;
    var day:any = dtToday.getDate();
    var year:any = dtToday.getFullYear();

    if (month < 10)
      month = '0' + month;
    if (day < 10)
      day = '0' + day;

    this.maxDate = year + '-' + month + '-' + day;
    
  }
}
