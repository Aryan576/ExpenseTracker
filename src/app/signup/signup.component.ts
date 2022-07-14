import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;

  constructor( private service:SignupService,private rut:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      name:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    });
   
    
  }
  
  signup(){
    if(this.signupForm.valid){
      
      this.service.saveusers(this.signupForm.value).subscribe(res=>{
          console.log(res);
          if(res.status ==200)
          {
            this.toastr.success(res.data.name,res.message);
            this.rut.navigateByUrl('')

          }else{
              this.toastr.warning(res.messsage);
              
          }
          
      })
      
    }

  }

}
