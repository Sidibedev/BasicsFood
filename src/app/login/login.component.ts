import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    TypeForm: FormGroup;
    authenticated:boolean=null

    constructor(private formBuilder: FormBuilder , private dataService:DataServiceService , private router:Router , private http:HttpClient) { }

    ngOnInit() {
        this.initForm();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    initForm() {
        this.TypeForm = this.formBuilder.group({
          username:  ['', Validators.required],
          password: ['', Validators.required],
         
        });
      }
    
    
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    onSubmitForm() {
        const formValue = this.TypeForm.value;
        
        const headers = new HttpHeaders(formValue['password'] && formValue['username'] ? {
          authorization : 'Basic ' + btoa(formValue['username']+ ':' + formValue['password'])
      } : {});
      const token = 'Basic ' + btoa(formValue['username']+ ':' + formValue['password'])

      try {
        this.http.get('https://basics-food.herokuapp.com/api/typeplat', {headers: headers}).subscribe(response => {
        if (!response['status']) {
            // stocker le token dans le localStorage 
            localStorage.setItem('token', token);
            
            //naviguer vers la route principale.
            this.router.navigate(['/listmenu'])
            window.location.reload();
            
        }
        
    });
        
      } catch (error) {
        alert(error)
      }
      
       
       
      }

    

}
