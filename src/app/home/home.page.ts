import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';
import { item } from '../item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  myitems:item[];
  constructor(private appService:AppServicesService) {

  }

  ngOnInit(){
    this.myitems=this.appService.returnMyItems();
  }

  onClickAdd(newitem){
    this.appService.addNewItem(newitem);
  }

  onClick(id:string){
    this.appService.getItem(id)
  }
}
