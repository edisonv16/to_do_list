import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../models/tarea.model';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private url = 'https://tareas-6f894-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) {}

 //crear una tarea
  createTarea( tarea: TareaModel):Observable<any>{
    return this.http.post(`${this.url}/tareas.json`,tarea)
    .pipe(
      map((resp: any) =>{
        tarea.id = resp.name;
        return tarea;
      })
    );
  }

  getTareaId(id:string){
    return this.http.get(`${this.url}/tareas/${id}.json`);
  } 
  //Actualizar una tarea
  actualizarTarea(tarea: TareaModel){

    const tareaTemp ={
      ...tarea
    };
    delete tareaTemp.id;

    return this.http.patch(`${this.url}/tareas/${tarea.id}.json`,tareaTemp );
  }
  //borrar una tarea
  borrarTarea(id:string){
    return this.http.delete(`${this.url}/tareas/${id}.json`);
  } 

  //llamar datos de una tarea
  getTareas(){
    return this.http.get(`${this.url}/tareas.json`)
    .pipe(
      map( this.crearArreglo),
      delay(800)
    );
  }

  private crearArreglo(tareaObj: object){
    const productos: TareaModel[] = [];
    Object.keys(tareaObj).forEach( key =>{
      const producto: TareaModel = tareaObj[key];
      producto.id = key;
      productos.push(producto);
    })
    if (tareaObj === null){return[];}
    return productos;
  }
}
