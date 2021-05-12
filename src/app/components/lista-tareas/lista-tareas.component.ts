import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TareaModel } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tareas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tarea: TareaModel [] = [];
  cargando = false;

  constructor(private tareaServices: TareaService,
    public auth: AuthService ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.tareaServices.getTareas()
    .subscribe(resp=>this.tarea = resp);
    this.cargando = false;
  }

  actualizarTarea(tarea: TareaModel){
    Swal.fire({
      title: '¿Está seguro?',
      text:`Está seguro que desea actualizar este elemento`,
      icon:'warning',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp =>{
      if (resp.value){
        this.tareaServices.actualizarTarea(tarea)
        .subscribe();
      }
    })
  }


  borrarTarea(tarea: TareaModel, i: number){
    Swal.fire({
      title: '¿Elminar ahora?',
      text:`Está seguro que desea borrar este elemento`,
      icon:'error',
      showConfirmButton: true,
      showCancelButton: true
    }).then (resp =>{
      if (resp.value){
        this.tarea.splice(i,1);
        this.tareaServices.borrarTarea(tarea.id)
        .subscribe();
      }
    });
  }
}
