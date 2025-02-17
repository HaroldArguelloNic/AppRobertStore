import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  private toastSubject = new Subject<{ tipo: string; mensaje: string }>();
  toast$ = this.toastSubject.asObservable(); // Observable para suscribirse

  mostrarToast(tipo: 'success' | 'error' | 'warning', mensaje: string) {
    console.log('Toast enviado:', tipo, mensaje); // Verifica en la consola
    this.toastSubject.next({ tipo, mensaje });
  }
}
