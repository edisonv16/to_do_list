import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { NgForm } from '@angular/forms';
import { TareaService } from '../../services/tareas.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss']
})
export class NuevaTareaComponent implements OnInit {

  tarea: TareaModel =new TareaModel();

  reloadCurrentPage() {
    window.location.reload();
  }

  constructor(private tareasService: TareaService) {}

  ngOnInit(): void {}
  guardar( form: NgForm ){
    if(form.invalid){
      console.log('Fomulario valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Información',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    if(this.tarea.id){
      peticion = this.tareasService.actualizarTarea(this.tarea);
    }else{
     peticion = this.tareasService.createTarea(this.tarea);
    }

    peticion.subscribe( resp =>{
      Swal.fire({
        title: this.tarea.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      })
    });
  }

}
