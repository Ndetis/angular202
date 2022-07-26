import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  currentUser$ = authState(this.auth);
  constructor(private auth: Auth) { }

  login(email:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,email,password))
  }

  logout(){
    return from(this.auth.signOut());
  }

  signUp(username:string,email:string,password:string){
    return from(createUserWithEmailAndPassword(this.auth,email,password)).pipe(
      switchMap(({user}) => updateProfile(user,{displayName:username}) )
    )

  }
}
