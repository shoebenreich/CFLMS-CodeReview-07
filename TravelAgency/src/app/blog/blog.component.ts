import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder) {}
  array = [];
  clicked = false;

  blog = new FormGroup({
    dest: new FormControl("",Validators.required),
    name: new FormControl("",Validators.required),
    visited: new FormControl("",Validators.required),
    text: new FormControl("",Validators.required),
    image: new FormControl("",Validators.required)
    }
);

clickPlus(){
  if (this.clicked === false) {
    this.clicked = true;
  }
  else {
    this.clicked = false;
  }
};
  

  ngOnInit(): void {
    
  }
  addBlog(){
    if (this.blog.valid) {
      var a = this.blog.value;
      this.array.push(a);
      Swal.fire({
      icon: 'success',
      title: 'Nice!',
      text: 'Your Blog Entry was added!',
    });
    this.blog.reset();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Input invalid!',
        text: 'You entered invalid information!',
      });
    }
    
  };
}
