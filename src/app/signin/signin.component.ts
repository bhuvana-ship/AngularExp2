import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  name = new FormControl('');
  password = new FormControl('');
  updateName(){
    this.name.setValue("Bhuvana");
    this.password.setValue("123456");
  }
 
}
