import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  usertoupdate : any
  TypeForm: FormGroup;
  constructor( private router: Router , private route: ActivatedRoute , private dataService:DataServiceService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
     this.dataService.findUserById(this.route.snapshot.params['id']).subscribe(
      (data:any) => {
        this.usertoupdate = data
       }
     )
  }

  initForm() {
    this.TypeForm = this.formBuilder.group({
      username:'',
    
    });
  }

  onSubmitForm() {
    const formValue = this.TypeForm.value;
   
    this.dataService.updateUser(this.route.snapshot.params['id'] , formValue['username']).subscribe(
      () => {
        this.router.navigate(['/listuser'])
      }
    )
   
  }

}
