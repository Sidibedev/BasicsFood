import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'
@Component ({

  selector: 'app-menushow',
  templateUrl: './menushow.component.html',
  styleUrls: ['./menushow.component.scss']

})

export class MenushowComponent implements OnInit {
  menus:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

        this.dataService.showmenu().subscribe(
          (data) => {

            this.menus = data
            console.log(this.menus)

          }
        )

  }

}
