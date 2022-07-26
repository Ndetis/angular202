import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.scss']
})
export class EditCompetenceComponent implements OnInit {

  competenceId!:string;
  competenceFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:CrudserviceService,
    private fb:FormBuilder,
  ) {
    this.competenceId = this.activedRoute.snapshot.params['id'];
    this.dataService.getCompetencesById(this.competenceId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.competenceId;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.competenceId);
    this.dataService.getCompetencesById(this.competenceId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.competenceFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          title:[data['title'],Validators.required],
          level:[data['level'],Validators.required],
          dateDebut:[data['dateDebut'],Validators.required],
          dateFin:[data['dateFin'],Validators.required],
          categorie:[data['categorie'],Validators.required],
        })
      }
    })
  }

  onUpdateCompetence(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.competenceFormGroup.value);

    this.dataService.updateCompetence(this.ancien,this.competenceFormGroup.value);
   alert("Update");
  }
}
