import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services.service';
import { ActivatedRoute } from '@angular/router';
import { item } from 'src/app/item.model';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  myItems:item;
  constructor(private appServices:AppServicesService, private activatedRoute:ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      const itemId=paramMap.get('itemId');
      this.myItems=this.appServices.getItem(itemId);
    });
  }

  onClickCheck(id:string){
    if (this.appServices.getItem(id)){
      this.appServices.changeDone(id);
    }
  }

}
