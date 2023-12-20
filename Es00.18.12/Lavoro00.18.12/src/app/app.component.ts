import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lavoro00.18.12';
  CANTANTI = [
    {id: 1, name:'lilbaby'},
    {id: 2, name:'madonna'},
    {id: 5, name:'sferaebbasta'},
    {id: 3, name:'Tharicky'},
    {id: 4, name:'Mohamedswag'}
  ];
}
