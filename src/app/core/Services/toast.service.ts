import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts:{message: string, duration: number, type: 'success' | 'warning' | 'danger'}[] = [];

add(message: string, duration: number= 3000, type: 'success' | 'warning' | 'danger') {
  this.toasts.push({message, duration, type});
  setTimeout(() => this.remove(0), duration);
}

remove(index: number) {
  this.toasts.splice(index, 1);
}


  constructor() { }
  private toastSubject = new Subject<{ tipo: string; mensaje: string }>();
  toast$ = this.toastSubject.asObservable(); // Observable para suscribirse

  mostrarToast(tipo: 'success' | 'error' | 'warning', mensaje: string) {
    console.log('Toast enviado:', tipo, mensaje); // Verifica en la consola
    this.toastSubject.next({ tipo, mensaje });
  }
}
