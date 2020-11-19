import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { IPerson } from 'src/app/models/person';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  errorMessage: string="";
  id: string="";
  message: string = "";
  userError: any;

  constructor( public activatedRoute: ActivatedRoute, public personService: PersonService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('personId');
    this.getPersonDetails()
   }

  ngOnInit(): void{
    
  }

  getPersonDetails() {
    
    this.personService.getPersonsList().subscribe((data) => {
    this.personService.person = data.filter(person=>this.id==person._id) as IPerson[];
    },
    (error) => {
      this.errorMessage=error.error.error;
      console.log(`error occured ${error.error.error}`)
    }
    )   
}

update(){
  this.personService.editPerson(this.personService.person[0],this.id).subscribe((data) => {
    console.log(data);
    this.message="person successfully edited"
    },
    (error) => {        
      console.log(`error occured ${error.error.error}`)
      this.userError=error.error.error;
    }
    ) 
}

delete(){
  if(confirm('Are you sure?')==true){

    this.personService.deletePerson(this.id).subscribe((data) => {
      console.log(data);
      this.message="person successfully deleted."
      },
      (error) => {        
        console.log(`error occured ${error.error.error}`)
        this.userError=error.error.error;
      }
      ) 
  }
}

}
