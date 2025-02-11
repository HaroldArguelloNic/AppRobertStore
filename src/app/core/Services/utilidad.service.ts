import { Injectable } from '@angular/core';
import {Sesion} from '../../interface/sesion';

@Injectable({
  providedIn: 'root'
})

export class UtilidadService {

  constructor() { }

  guardarSesionUsuario(usuarioSesion: Sesion): void {
    if (usuarioSesion) {
      sessionStorage.setItem("usuario", JSON.stringify(usuarioSesion));
    } else {
      console.log("Usuario Null");
    }
  }

  obtenerSesionUsuario(): Sesion | null {
    const dataCadena = sessionStorage.getItem("usuario");
    if (dataCadena) {
      return JSON.parse(dataCadena!);
    }
    console.log(sessionStorage.getItem("usuario"))
    return null;
  }

  eliminarSesionUsuario(): void {
    sessionStorage.removeItem("usuario");
  }


}
