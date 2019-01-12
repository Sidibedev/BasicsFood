import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users:object;
  empty:boolean;
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

      this.fetchUser()
   
    
  }

  delete(id) {

   this.dataService.deleteUser(id).subscribe(
     () => {
      this.fetchUser()
     } 
   )
  }

  update(id) {
    console.log(id)
  }


  fetchUser() {
    this.dataService.fetchUser().subscribe(
      (data:any[]) => {
       
        if(data.length <=0) {
          console.log('la liste est vide')
          this.empty = true

        }else {
          this.users = data.reverse();
          this.empty = false
          

        }
        
       
      } 
    )
  }

}
