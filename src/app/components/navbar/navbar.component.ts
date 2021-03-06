import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public installEvent = null


  constructor(location: Location,  
    private element: ElementRef, 
    private router: Router,
    public storageService: StorageService) {
    this.location = location;
  }

  

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  @HostListener('window:beforeinstallprompt',['$event'])
  onbeforeinstallprompt(event:Event){
    console.log('before install prompt')
    console.log(event)
    event.preventDefault()
    this.installEvent = event
  }

  installByUser(){
    if(this.installEvent) {
      this.installEvent.prompt()
      this.installEvent.userChoice
        .then(rta => {
          console.log(rta)
        })
    }
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return '';
  }

 




}
