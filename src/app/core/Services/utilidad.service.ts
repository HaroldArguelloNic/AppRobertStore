import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Sesion } from '../../interface/sesion';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {

  // Inyectamos PLATFORM_ID para verificar si estamos en un navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  guardarSesionUsuario(usuarioSesion: Sesion): void {
    if (isPlatformBrowser(this.platformId)) { //Solo ejecutara si esta en el navegador para evitar los errores de acceso al local storage
      if (usuarioSesion) {
        sessionStorage.setItem("usuario", JSON.stringify(usuarioSesion));
      } else {
        console.log("Usuario Null");
      }
    }
  }

  obtenerSesionUsuario(): Sesion | null {
    if (isPlatformBrowser(this.platformId)) { // Solo se ejecutara si se esta accediendo desde el navegador
      const dataCadena = sessionStorage.getItem("usuario");
      if (dataCadena) {
        return JSON.parse(dataCadena);
      }
      console.log(sessionStorage.getItem("usuario"));
    }
    return null;
  }

  usuarioAutenticado(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.obtenerSesionUsuario() !== null;
    }
    return false; // Si no es un navegador, se asumira  que no hay sesión
  }

  eliminarSesionUsuario(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem("usuario");
    }
  }
}
