import { Injectable } from '@angular/core';
import { item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  private items:item[]=[{
    id:'1',
    name:'none',
    description:'this is an example',
    done:false
  },
  {
    id:'2',
    name:'one more time',
    description:'this is another example',
    done:true
  }
];

  constructor() { }

  returnMyItems(){
    return {...this.items};
  }

  changeDone(itemId:string){
    this.items[itemId].done=true;
    console.log(this.items[itemId]);
    return true;
  }

  addNewItem(newitem:item){
    this.items.push(newitem);
  }

  getItem(itemiId:string){
    return {...this.items.find(item=>{
      return item.id===itemiId;
    })};
  }

}
