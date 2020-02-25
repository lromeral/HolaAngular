import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
   imagenSrc: string;
   arrayImagenes: string[];

  constructor() { }

  ngOnInit(): void {
    this.arrayImagenes=[];
  }

  addImagen(){
    this.arrayImagenes.push(this.imagenSrc);

    console.log("clicked " + this.imagenSrc);

    this.imagenSrc='';
  }
  delImagen(indice:number){
    this.arrayImagenes.splice(indice,1);
  }

  getIndiceImagen (imagen:string){
    let indice: Number;
    indice = this.arrayImagenes.indexOf(imagen);
    console.log("Indice " + indice);
    return indice;

  }
}
