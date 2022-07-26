import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ICompetence } from 'src/app/models/model';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  constructor(
   private dateService:CrudserviceService,
   private fb: FormBuilder,
  ) { }
  competences!:any[];
  competenceFormGroup!: FormGroup;
  submitted:boolean= false;


  ngOnInit(): void {
    this.competenceFormGroup = this.fb.group({
      title:['',Validators.required],
      level:['',Validators.required],
      dateDebut:['',Validators.required],
      dateFin:['',Validators.required],
      categorie:['',Validators.required]
    })

    this.getCompetences();



  }
  getCompetences(){
    this.dateService.getCompetences()
    .subscribe((data)=>{
      console.log(data);
      this.competences = data;
    })

  }

  get title(){return this.competenceFormGroup.get('title');}

  get level(){return this.competenceFormGroup.get('level');}

  get dateDebut(){return this.competenceFormGroup.get('dateDebut');}

  get dateFin(){return this.competenceFormGroup.get('dateFin');}

  get categorie(){return this.competenceFormGroup.get('categorie');}



  onRegister():void{
    this.submitted = true;
    if(this.competenceFormGroup.invalid) {console.log('Invalid form group');return;}
    //nb ajouter un toast pour les notifs
    else{
      console.log('ici');

      this.dateService.createCompetences(this.competenceFormGroup.value).then((res)=>{
        console.log(res);

      })
    }
  }
}
