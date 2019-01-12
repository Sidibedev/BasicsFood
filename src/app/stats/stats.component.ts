import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines:false,
    responsive:true
  }
  public stats = []
  public datatype = []
  public ready = false
  public labels = []
  public LabelsPrix=[]
  public dataPrix=[]
  public types:any
  public barChartLabels = this.labels
  public prixChartLabels= this.LabelsPrix
  public prixChartData = [{data : this.dataPrix, label:'Nombre de plats par prix'}]
  public barChartType = 'line'
  public barChartLegend = true
  public barChartData = [
    {data : this.datatype, label:'Nombre de plats par type'},
   
  ]
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#FF3636',
      pointBackgroundColor: '#FF3636',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#FF3636',
      pointBackgroundColor: '#FF3636',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  constructor(private dataService:DataServiceService) { }
  
  ngOnInit() {

    //this.fetchTypes()
    this.statsPlatType()
    this.statsPlatPrix()
     
  }

  statsPlatType() {
    this.dataService.statsPlatType().subscribe(
      (data:any) => {
        this.stats = data.results
        this.stats.forEach(element => {
          this.labels.push(element.Typeplat)
          this.datatype.push(element.total)
        });
        
      }
    )
  }

  statsPlatPrix() {
    this.dataService.statsPlatPrix().subscribe(
      (data:any) => {
        this.stats = data.results
        this.stats.forEach(element => {
          this.LabelsPrix.push(element.prix)
          this.dataPrix.push(element.total)
        });
        this.ready = true
      }
    )
  }
  

}
