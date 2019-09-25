import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public result;
  myProfileImage:string="assets/images/photos.JPG";
  constructor(private _demoService: ServicesService) { }

  ngOnInit() {
    this._demoService.getDetails().subscribe(demo => this.result = demo);
  }

}
