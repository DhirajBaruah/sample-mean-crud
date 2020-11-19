import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;
  


  constructor(public fb: FormBuilder, public personService: PersonService) {
    this.myForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      mobile_number: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]]
    })

   }

   onSubmit(signupform){
    this.personService.postPerson(signupform.value).subscribe((data) => {
      console.log(data);
      this.message="person successfully added"
      },
      (error) => {        
        console.log(`error occured ${error.error.error}`)
        this.userError=error.error.error;
      }
      ) 
  }

  ngOnInit(): void {
  }

}
