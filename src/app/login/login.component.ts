import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private service:LoginService,private rut:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }

  login(){
    if(this.loginForm.valid){
      
      this.service.login(this.loginForm.value).subscribe(res=>{
        this.service.users=res.data
        console.log(this.service.users); 
        
        if(res.status==200){
            this.toastr.success(res.data.name,res.message);
            this.rut.navigateByUrl('/dashboard');
        }else{
          this.toastr.error(res.message,res.status);
            this.rut.navigateByUrl('');
        }
      })
    }
  }

}
