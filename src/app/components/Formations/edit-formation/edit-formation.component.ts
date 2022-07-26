import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss']
})
export class EditFormationComponent implements OnInit {

  formationId!:string;
  formationFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:CrudserviceService,
    private fb:FormBuilder,
  ) {
    this.formationId = this.activedRoute.snapshot.params['id'];
    this.dataService.getFormationsById(this.formationId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.formationId;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.formationId);
    this.dataService.getFormationsById(this.formationId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.formationFormGroup  = this.fb.group({
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

  onUpdateFormation(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.formationFormGroup.value);

    this.dataService.updateFormation(this.ancien,this.formationFormGroup.value);
   alert("Update");
  }
}
