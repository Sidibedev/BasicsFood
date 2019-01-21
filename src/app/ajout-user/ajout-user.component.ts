import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';
import {User} from '../Models/User'
@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  TypeForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private dataService:DataServiceService , private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.TypeForm = this.formBuilder.group({
      username:  ['', Validators.required],
      password: ['', Validators.required],
      confirpasswrod: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.TypeForm.value;
    console.log(formValue['password'])
    console.log(formValue['confirpasswrod'])
    if(formValue['password'] === formValue['confirpasswrod']) {

      let user = new User(formValue['username'] , formValue['password'])
     // console.log(user)
      this.dataService.addUser(user).subscribe(
      () => {
        this.router.navigate(['/listuser'])
      }
    )
    }else{
      alert('Les mots de passe ne correspondent pas')
    }
     
   
  }

}
