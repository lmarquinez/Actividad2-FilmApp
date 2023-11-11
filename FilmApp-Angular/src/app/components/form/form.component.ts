import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  newMovie: any = {};

  onSubmit() {
    console.log('The data has been send', this.newMovie);
  }

}
