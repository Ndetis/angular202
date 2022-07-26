import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService:AuthserviceService,
    private router:Router,
    ) {


    }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe(()=>{
        this.router.navigate(['']);
    })
  }


}
