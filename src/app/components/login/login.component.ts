import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),

  })
  constructor(
    private authService:AuthserviceService,
    private router:Router,
    private toast : HotToastService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(!this.loginForm.valid)
      return;

    const {email,password} = this.loginForm.value;
    this.authService.login(email,password).pipe(
      this.toast.observe(
        {
          success: 'Logged in successfully',
          loading:'Logging in ...',
          error: 'You are not register'
        }
      )
    ).subscribe(()=>{
      this.router.navigate(['/dashboard']);
    })
  }

  get email(){return this.loginForm.get('email');}

  get password(){return this.loginForm.get('password');}

  onRegister(){
    this.router.navigate(['/register']);
  }
}
