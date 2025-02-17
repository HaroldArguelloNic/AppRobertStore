import { Component } from '@angular/core';
import {ToastService} from '../Services/toast.service';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [
    NgClass,CommonModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  showToast = false;
  toastTitle = '';
  toastMessage = '';
  toastClass = 'text-bg-success';

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(({ tipo, mensaje }) => {
      this.mostrarToast(tipo, mensaje);
    });
  }

  mostrarToast(tipo: string, mensaje: string) {
    this.showToast = true;
    this.toastMessage = mensaje;

    if (tipo === 'success') {
      this.toastTitle = '✅ Éxito';
      this.toastClass = 'text-bg-success';
    } else if (tipo === 'error') {
      this.toastTitle = '❌ Error';
      this.toastClass = 'text-bg-danger';
    } else if (tipo === 'warning') {
      this.toastTitle = '⚠️ Advertencia';
      this.toastClass = 'text-bg-warning';
    }

    // Ocultar después de 4 segundos
    setTimeout(() => (this.showToast = false), 3000);
  }
}
