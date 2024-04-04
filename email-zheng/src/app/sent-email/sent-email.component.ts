import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SenteMailComponent {
  @Input() emails: any[] = [];

  toggleEmail(index: number) {
    this.emails[index].espansa = !this.emails[index].espansa;
  }

  evidenziaSpeciale(index: number) {
    this.emails[index].evidenziato = !this.emails[index].evidenziato;
  }
}