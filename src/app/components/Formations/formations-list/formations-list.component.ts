import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompetence } from 'src/app/models/model';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-formations-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.scss']
})
export class FormationsListComponent implements OnInit {

  @Input() formationsInput!: any[];
  constructor(
    private dataService:CrudserviceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteCompetence(item);
    console.log('formation supprimee');

  }

  onEdit(item:any){
    this.router.navigateByUrl("/editCompetence/"+item.id);

  }

}
