import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private formBuilder:FormBuilder) { }
  contact = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    text: new FormControl("",Validators.required)
    });

  


  ngOnInit(): void {
    
  }
  onSubmit(){
    if (this.contact.valid) {
      Swal.fire({
      icon: 'success',
      title: 'Yeay!',
      text: 'Thank you for your message!',
    });
    this.contact.reset();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Please try again!',
      });
    }
    
  };

}
