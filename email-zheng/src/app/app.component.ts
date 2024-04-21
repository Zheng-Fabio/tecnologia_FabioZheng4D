import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-zheng';

  mittente: string = '';
  destinatario: string = '';
  oggetto: string = '';
  testo: string = '';
  emails: { oggetto: string, mittente: string, destinatario: string, testo: string, highlighted: boolean }[] = [];

  salvaEmail() {
    if (!this.mittente || !this.destinatario || !this.oggetto || !this.testo) {
      alert('Compila i campi');
      return false;
    }
  
    const email = { oggetto: this.oggetto, mittente: this.mittente, destinatario: this.destinatario, testo: this.testo, highlighted: false };
    this.emails.push(email);
   
    this.mittente = '';
    this.destinatario = '';
    this.oggetto = '';
    this.testo = '';
  
    return false;
  }

  toggleHighlighted(email: any) {
    email.highlighted = !email.highlighted;
  }

  deleteEmail(email: any) {
    // Trova l'indice dell'email nell'array emails
    const index = this.emails.indexOf(email);
    
    // Verifica se l'email è stata trovata
    if (index !== -1) {
      // Rimuovi l'email dall'array
      this.emails.splice(index, 1);
    }
  }
}
