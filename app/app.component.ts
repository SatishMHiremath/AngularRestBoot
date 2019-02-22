import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Sample Customer Crud App';
  description = 'Angular-SpringBoot';

  constructor(private formBuilder : FormBuilder) {
    // this.createForm();
  }

  // exampleForm = new FormGroup({    
  //   firstName : new FormControl(),
  //   lastName : new FormControl(),
  // });

  // createForm(): any {
    // throw new Error("Method not implemented.");
    // this.exampleForm = this.formBuilder.group({
    //   firstName: '',
    //   lastName: '',
    // });
  // }

}
