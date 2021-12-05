import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public usuario:string="";
  public password:string="";

  constructor( private storageService: StorageService,private api: LoginService,private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(){

    this.api.login(this.usuario,this.password).subscribe(data =>{
      this.storageService.setCurrentSession(data);
      this.router.navigate(['/dashboard']);
    })
  }

}
