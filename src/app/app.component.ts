import { Component, OnInit } from '@angular/core';
import { StorageService } from './service/storage.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Inventario'

  
  constructor(
        public storageService: StorageService,
        private swUpdate: SwUpdate        
        ){}

  ngOnInit() {
      this.updatePWA();
  }
        
  updatePWA(){
    this.swUpdate.available.subscribe(value =>{
      console.log('update:', value);
      window.location.reload();
    })

  }

}
