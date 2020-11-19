import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/person';
import { PersonService } from '../../services/person.service';



@Component({
  selector: 'app-list-of-people',
  templateUrl: './list-of-people.component.html',
  styleUrls: ['./list-of-people.component.css'],
})
export class ListOfPeopleComponent implements OnInit {
  errorMessage: string="";
  constructor(public personService: PersonService) {}

  ngOnInit() {
    this.refreshPeopleList();
  }

  refreshPeopleList() {
    
      this.personService.getPersonsList().subscribe((data) => {
      this.personService.person = data as IPerson[];
      },
      (error) => {
        this.errorMessage=error.error.error;
        console.log(`error occured ${error.error.error}`)
      }
      )   
  }
}
