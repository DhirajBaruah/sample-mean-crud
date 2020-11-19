import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

import { API } from './backend';
import { IPerson } from '../models/person';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  person: IPerson[];

  constructor(public http: HttpClient) { }

  getPersonsList():Observable<IPerson[]> {
    return this.http.get<IPerson[]>(`${API}/person`);
  }

  postPerson(person:IPerson){
    return this.http.post(`${API}/person`, person);
  }

  editPerson(person:IPerson, id:string){
    return this.http.put(`${API}/person/${id}`, person);
  }

  deletePerson(id:string){
    return this.http.delete(`${API}/person/${id}`);
  }


}
