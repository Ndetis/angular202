import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import IUser from 'src/app/models/model';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user!:IUser;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    username: new FormControl('',[Validators.required])
  })
  constructor(
    private router: Router,
    private authservice: AuthserviceService,
    private toast:HotToastService,
    private crudService:CrudserviceService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (!this.loginForm.valid)  return;
    const {username,email,password} = this.loginForm.value;
    this.user = this.loginForm.value;
    this.user.id = 'one';
    this.authservice.signUp(username,email,password).pipe(
      this.toast.observe(
        {
          success:"Congrats! You are all signed up",
          loading:"Signing in",
          error:({message}) => `${message}`
        }
      )
    ).subscribe(()=>{
      this.crudService.createInformation(this.user);
      this.router.navigate(['/login']);
    })

    console.warn(this.loginForm.value);
  }
  get username(){return this.loginForm.get('username');}

  get email(){return this.loginForm.get('email');}

  get password(){return this.loginForm.get('password');}

  onLogin(){
    this.router.navigate(['/login']);
  }

}
