import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-tarea',
  templateUrl: './buscar-tarea.component.html',
  styleUrls: ['./buscar-tarea.component.scss']
})
export class BuscarTareaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}
  
  buscarProducto(termino:string){
     console.log(termino);

    this.router.navigate(['/busqueda', termino]);
  }

}
