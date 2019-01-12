import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  menus:object;
  empty:boolean;
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

      this.fetchMenu()
   
    
  }

  delete(id) {

   this.dataService.deleteMenu(id).subscribe(
     () => {
      this.fetchMenu()
     } 
   )
  }

  update(id) {
    console.log(id)
  }


  fetchMenu() {
    this.dataService.fetchMenus().subscribe(
      (data:any[]) => {
       
        if(data.length <=0) {
          console.log('la liste est vide')
          this.empty = true

        }else {
          this.menus = data.reverse();
          this.empty = false
          

        }
        
       
      } 
    )
  }

}
