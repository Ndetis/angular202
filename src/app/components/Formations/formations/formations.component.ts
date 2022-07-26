import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { IFormation } from 'src/app/models/model';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  constructor(
    private dateService:CrudserviceService,
    private fb: FormBuilder,
   ) { }
   formations!:any[];
   formationFormGroup!: FormGroup;
   submitted:boolean= false;
 
 
   ngOnInit(): void {
     this.formationFormGroup = this.fb.group({
       title:['',Validators.required],
       level:['',Validators.required],
       dateDebut:['',Validators.required],
       dateFin:['',Validators.required],
       categorie:['',Validators.required]
     })
 
     this.getFormations();
 
 
 
   }
   getFormations(){
     this.dateService.getFormations()
     .subscribe((data)=>{
       console.log(data);
       this.formations = data;
     })
 
   }
 
   get title(){return this.formationFormGroup.get('title');}
 
   get level(){return this.formationFormGroup.get('level');}
 
   get dateDebut(){return this.formationFormGroup.get('dateDebut');}
 
   get dateFin(){return this.formationFormGroup.get('dateFin');}
 
   get categorie(){return this.formationFormGroup.get('categorie');}
 
 
 
   onRegister():void{
     this.submitted = true;
     if(this.formationFormGroup.invalid) {console.log('Invalid form group');return;}
     //nb ajouter un toast pour les notifs
     else{
       console.log('ici');
 
       this.dateService.createFormation(this.formationFormGroup.value).then((res)=>{
         console.log(res);
 
       })
     }
   }
 
}
