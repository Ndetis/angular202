import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompetence } from 'src/app/models/model';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-competences-list',
  templateUrl: './competences-list.component.html',
  styleUrls: ['./competences-list.component.scss']
})
export class CompetencesListComponent implements OnInit {

  @Input() competencesInput!: any[];
  constructor(
    private dataService:CrudserviceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteCompetence(item);
    console.log('competence supprimee');

  }

  onEdit(item:any){
    this.router.navigateByUrl("/editCompetence/"+item.id);

  }
}
