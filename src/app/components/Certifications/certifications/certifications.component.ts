import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ICompetence } from 'src/app/models/model';
import { CrudserviceService } from 'src/app/services/crudservice.service';



@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor(
    private dateService:CrudserviceService,
    private fb: FormBuilder,
   ) { }
   Certifications!:any[];
   CertificationFormGroup!: FormGroup;
   submitted:boolean= false;
 
 
   ngOnInit(): void {
     this.CertificationFormGroup = this.fb.group({
       title:['',Validators.required],
       level:['',Validators.required],
       dateDebut:['',Validators.required],
       dateFin:['',Validators.required],
       categorie:['',Validators.required]
     })
 
     this.getCertifications();
 
 
 
   }
   getCertifications(){
     this.dateService.getCertifications()
     .subscribe((data)=>{
       console.log(data);
       this.Certifications = data;
     })
 
   }
 
   get title(){return this.CertificationFormGroup.get('title');}
 
   get level(){return this.CertificationFormGroup.get('level');}
 
   get dateDebut(){return this.CertificationFormGroup.get('dateDebut');}
 
   get dateFin(){return this.CertificationFormGroup.get('dateFin');}
 
   get categorie(){return this.CertificationFormGroup.get('categorie');}
 
 
 
   onRegister():void{
     this.submitted = true;
     if(this.CertificationFormGroup.invalid) {console.log('Invalid form group');return;}
     //nb ajouter un toast pour les notifs
     else{
       console.log('ici');
 
       this.dateService.createCertification(this.CertificationFormGroup.value).then((res)=>{
         console.log(res);
 
       })
     }
   }
 

}
