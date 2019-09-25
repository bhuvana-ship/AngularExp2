import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myDetails } from './details';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public getDetails(): Observable<myDetails[]> {
    const url = "assets/data/employee.json";
    return this.http.get<myDetails[]>(url);
  }
  
}

