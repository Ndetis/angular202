import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.scss']
})
export class CertificationsListComponent implements OnInit {

  @Input() certificationsInput!: any[];
  constructor(
    private dataService:CrudserviceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteCertification(item);
    console.log('certification supprimee');

  }

  onEdit(item:any){
    this.router.navigateByUrl("/editCertification/"+item.id);

  }

}
