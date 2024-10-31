import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
jogo: any;

ngOnInit(): void {
  const registro = localStorage.getItem('jogo');
  if (registro) {
    this.jogo = JSON.parse (registro);
  }
}
}
