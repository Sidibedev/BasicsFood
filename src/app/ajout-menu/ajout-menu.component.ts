import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';
import { Type } from 'app/Models/Type';
import { Menu } from 'app/Models/Menu';

@Component({
  selector: 'app-ajout-menu',
  templateUrl: './ajout-menu.component.html',
  styleUrls: ['./ajout-menu.component.scss']
})
export class AjoutMenuComponent implements OnInit {
  types:any
  url:any
  TypeForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private dataService:DataServiceService , private router:Router) { }

  ngOnInit() {
    this.initForm();
    this.getTypes()
  }

  getTypes() {
    this.dataService.fetchType().subscribe(
      (data:any[]) => {
       
          this.types = data.reverse();
          
      } 
    )
  }

  initForm() {
    this.TypeForm = this.formBuilder.group({
      nomplat:['', Validators.required],
      prix:['', Validators.required],
      photo:'',
      typeplat:['', Validators.required],
      description:''
    });
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onSubmitForm() {
    const formValue = this.TypeForm.value;
    
    this.dataService.findTypeById(formValue['typeplat']).subscribe(
      (data) => {
        let menu = new Menu(formValue['nomplat'] , formValue['prix'] ,this.url , formValue['description'] ,data )
    
        this.dataService.addMenu(menu).subscribe(
          () => {
            this.router.navigate(['/listmenu'])
          }
        )
      }
    )
    
   
   
  }

}
