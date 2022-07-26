import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import IUser from 'src/app/models/model';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userC!:any;
  fullName!:any;
  email!:any;
  birthDay:Date = new Date();
  mobile:string = '';
  address:string = '';
  password!:any;
  infoId!:any;

  settingsFormGroup = new FormGroup({
    nom: new FormControl(this.fullName,[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    dateNaissance: new FormControl('',[Validators.required]),
    contact: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    email: new FormControl(this.email,[Validators.required]),


  })

  constructor(
    public authService:AuthserviceService,
    private crudService: CrudserviceService,


  ) { }

  ngOnInit(): void {

    if(this.authService.currentUser$ !== undefined){

      this.authService.currentUser$.subscribe((user)=>{
        this.fullName = user?.displayName ;
        this.email = user?.email;
        // alert(user?.uid);
        this.crudService.getInformations()
        .subscribe((data)=>{
          this.infoId = data[0]['id'];
          this.getCurrentInfo();
          // console.error(this.userC);
          this.password = data[0]['password'];
        })


      })


    }

  }

  getCurrentInfo(){
    this.crudService.getInformationById(this.infoId)
    .subscribe((data) => {
      this.userC = data;
      this.userC.id = this.infoId;
      this.birthDay = this.userC.dateNaissance;
      this.mobile = this.userC.contact;
      this.userC.email = this.email;
      console.info(this.userC);
    })
  }
  onUpdate():void{
    this.crudService.updateInformation(this.userC,this.settingsFormGroup.value)
  }

}
