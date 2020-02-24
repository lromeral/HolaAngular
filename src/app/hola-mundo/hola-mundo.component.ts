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

}
