import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({ 
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email])
       }),
      'gender': new FormControl('male')
    })
  }
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  onSubmit(){
    console.log(this.signUpForm);
    
  }
}
