import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Type } from 'app/Models/Type';


@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss']
})
export class EditTypeComponent implements OnInit {
  typetoupdate =''
  TypeForm: FormGroup;
  constructor( private router: Router , private route: ActivatedRoute , private dataService:DataServiceService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.dataService.findTypeById(this.route.snapshot.params['id']).subscribe(
      (data:any) => {
       this.typetoupdate = data.nom
      }
    )
  }

  initForm() {
    this.TypeForm = this.formBuilder.group({
      typename: ''
    });
  }

  onSubmitForm() {
    const formValue = this.TypeForm.value;
    let type = new Type( formValue['typename'])
    this.dataService.updateType(this.route.snapshot.params['id'], type).subscribe(
      () => {
        this.router.navigate(['/listtypeplat'])
      }
    )
   
  }

}
