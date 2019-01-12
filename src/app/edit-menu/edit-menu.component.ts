import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/Models/Menu';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {
  types:any
  url:any
  menutoupdate:any
  TypeForm: FormGroup;
  constructor( private router: Router , private route: ActivatedRoute , private dataService:DataServiceService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTypes()
    this.initForm();
    this.dataService.findMenuById(this.route.snapshot.params['id']).subscribe(
      (data:any) => {
       this.menutoupdate = data
      }
    )
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
      nomplat: '',
      prix:'',
      photo:'',
      typeplat:'',
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
    console.log(this.url)
    this.dataService.findTypeById(formValue['typeplat']).subscribe(
      (data) => {
        let menu = new Menu(formValue['nomplat'] == "" ? this.menutoupdate.plat : formValue['nomplat'] , formValue['prix'] == "" ? this.menutoupdate.prix : formValue['prix'] , this.url == undefined ? this.menutoupdate.photo : this.url , formValue['description'] == "" ? this.menutoupdate.desc : formValue['description'] ,data == null ? this.menutoupdate.typePlat : data )
        this.dataService.updateMenu(  this.route.snapshot.params['id'] , menu).subscribe(
          () => {
            this.router.navigate(['/listmenu'])
          }
        )
      }
    )
    
   
   
  }
}
