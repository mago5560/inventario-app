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

    /*
    let user: Session = 
     {
      "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiYmRzc2VjdXJlaWQiXSwidXNlcl9uYW1lIjoiZGVtbyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE5NDQ0MjUyNzAsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6ImYzMjE1NDI3LTYyNWMtNDNkYS1iZDA0LTA2YmQ1OTRmOThmZCIsImNsaWVudF9pZCI6ImJkc3Jlc3RhdXJhbnRhcHAifQ.alvIRWZC87piP1RxDrNe21NFDVjmidekgiceblfxdj8",
      "token_type": "bearer",
      "expires_in": 499999,
      "scope": "read write",
      "jti": "f3215427-625c-43da-bd04-06bd594f98fd"
  }

    this.storageService.setCurrentSession(user);
    this.router.navigate(['/dashboard']);
    */


    this.api.login(this.usuario,this.password).subscribe(data =>{
      this.storageService.setCurrentSession(data);
      this.router.navigate(['/dashboard']);
    })
    
  }

}
