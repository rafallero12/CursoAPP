import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  avisos: string[] = ['Aviso1', 'Aviso2', 'Aviso3'];
  texto: string;

  mostrarMensaje(event) {
    this.texto = event + ' marcado como leído';
  }

  constructor() { }

  ngOnInit() {
  }

}
