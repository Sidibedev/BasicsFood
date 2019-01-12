import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';
import { Type } from 'app/Models/Type';

@Component({
  selector: 'app-ajout-type-plat',
  templateUrl: './ajout-type-plat.component.html',
  styleUrls: ['./ajout-type-plat.component.scss']
})
export class AjoutTypePlatComponent implements OnInit {
  TypeForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private dataService:DataServiceService , private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.TypeForm = this.formBuilder.group({
      typename: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.TypeForm.value;
    let type = new Type(formValue['typename'])
    this.dataService.addType(type).subscribe(
    () => {
      this.router.navigate(['/listtypeplat'])
    }
  )
   
  }
}
