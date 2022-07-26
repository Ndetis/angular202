import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {

  certificationId!:string;
  certificationFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:CrudserviceService,
    private fb:FormBuilder,
  ) {
    this.certificationId = this.activedRoute.snapshot.params['id'];
    this.dataService.getCertificationById(this.certificationId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.certificationId;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.certificationId);
    this.dataService.getCertificationById(this.certificationId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.certificationFormGroup  = this.fb.group({
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

  onUpdateCertification(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.certificationFormGroup.value);

    this.dataService.updateCertification(this.ancien,this.certificationFormGroup.value);
   alert("Update");
  }

}
