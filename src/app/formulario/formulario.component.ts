import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  times: string[] = ['Águias', 'Raposada', 'Devoradores', 'Olimpo', 'Tourada', 'Leões Impostores', 'Educaloucos', 'Pumalucos', 'Forasteiros', 'Rato louco', 'Gorilada', 'Javaloucos'];
  time1: string = '';
  time2: string = '';
  horario: string = '';

  constructor (private router: Router) {}
  
  onSubmit() {
    const jogo = { time1: this.time1, time2: this.time2, horario: this.horario};
    console.log(jogo);
    localStorage.setItem('jogo', JSON.stringify(jogo));
    this.router.navigate(['/resultado']);
  }
}
