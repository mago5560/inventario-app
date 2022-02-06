import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/model/session';
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

    let user: Session = 
     {
      "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiYmRzc2VjdXJlaWQiXSwidXNlcl9uYW1lIjoibG1lbmRvemEiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjQ0NDI1MTcwLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJqdGkiOiJmMzIxNTQyNy02MjVjLTQzZGEtYmQwNC0wNmJkNTk0Zjk4ZmQiLCJjbGllbnRfaWQiOiJiZHNyZXN0YXVyYW50YXBwIn0._KS2xTyT2hsgDHCujohZQWgMcWPvnVhCsvHh6WPO_X4",
      "token_type": "bearer",
      "expires_in": 499999,
      "scope": "read write",
      "jti": "f3215427-625c-43da-bd04-06bd594f98fd"
  }

    this.storageService.setCurrentSession(user);
    this.router.navigate(['/dashboard']);

/*
    this.api.login(this.usuario,this.password).subscribe(data =>{
      this.storageService.setCurrentSession(data);
      this.router.navigate(['/dashboard']);
    })
    */
  }

}
