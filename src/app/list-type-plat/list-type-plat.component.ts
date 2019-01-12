import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-list-type-plat',
  templateUrl: './list-type-plat.component.html',
  styleUrls: ['./list-type-plat.component.scss']
})
export class ListTypePlatComponent implements OnInit {
  types:object;
  empty:boolean;
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

      this.fetchType()
   
    
  }

  delete(id) {

   this.dataService.deleteType(id).subscribe(
     () => {
      this.fetchType()
     } 
   )
  }

  update(id) {
    console.log(id)
  }


  fetchType() {
    this.dataService.fetchType().subscribe(
      (data:any[]) => {
       
        if(data.length <=0) {
          console.log('la liste est vide')
          this.empty = true

        }else {
          this.types = data.reverse();
          this.empty = false
          

        }
        
       
      } 
    )
  }

  

}
