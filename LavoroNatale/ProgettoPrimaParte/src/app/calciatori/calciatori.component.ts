import { Component } from '@angular/core';

@Component({
  selector: 'app-calciatori',
  templateUrl: './calciatori.component.html',
  styleUrls: ['./calciatori.component.css']
})
export class calciatoriComponent {
  visualizzaCalciatori: boolean = false;
  testoBottone = 'Mostra Lista'
  Calciatori = [
    { nome: 'Messi', Squadra: 'Inter Miami' , Abilita: 'Tecnica' },
    { nome: 'Ronaldo', Squadra: 'Al Nasser', Abilita: 'Atleticismo' },
    { nome: 'Neymar', Squadra: 'Al Hilal', Abilita: 'Creativita' },
    { nome: 'Fabio', Squadra: 'Afforese', Abilita: 'Niente' },
    { nome: 'Lakaka', Squadra: 'Roma', Abilita: 'Forza' },
    { nome: 'Zio Franco', Squadra: 'Scheicchi', Abilita: 'Soldi' }
  ];
  

  toggleVisualizzaCalciatori() {
    this.visualizzaCalciatori = !this.visualizzaCalciatori;
    this.testoBottone = this.visualizzaCalciatori ? 'Nascondi Calciatori' : 'Mostra Calciatori';
  }
}

