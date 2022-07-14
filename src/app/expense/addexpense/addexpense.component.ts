import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss']
})
export class AddexpenseComponent implements OnInit {
  maxDate:any;
  addCategoryForm:FormGroup
  categoryList:{}
  addexpenseForm:FormGroup
  userid:{}

  expense:{}
  constructor(private category:CategoryService,private toastr: ToastrService,public service:LoginService,private expenseservice:ExpenseService) { }

  ngOnInit(): void {
    
    this.userid={"userid":this.service.users.userid}
    this.addexpenseForm = new FormGroup({
      
      expensename:new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      expensedate:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required),
      paymenttype:new FormControl('',Validators.required),
      comments:new FormControl('',Validators.required),
      users:new FormControl(this.userid,Validators.required)

    })

    this.category.listCategory().then(res=>{
      this.categoryList=res.data
    })


    this.addCategoryForm= new FormGroup({
      categoryname: new FormControl('',Validators.required)
    })
  
    this.futureDateDisabled();

  }

  

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
  addCategory(){
    
    if(this.addCategoryForm.valid)
    {
      this.category.addCategory(this.addCategoryForm.value).subscribe(res=>{
        if(res.status==200){

          this.toastr.success(res.message,res.status);

        }else{
          this.toastr.error(res.message,res.status);
        }
      })
    }

  }

  addExpense(){

   console.log(this.addexpenseForm.value);
   
    if(this.addexpenseForm.valid)
    {
      
      
          this.expenseservice.addexpense(this.addexpenseForm.value).subscribe(res=>{
            console.log(this.addexpenseForm.value);
            
            if(res.status==200){
              this.toastr.success(res.message,res.status);

            }else{
              this.toastr.error(res.message,res.status);
            }
          })
    }

  }
}
