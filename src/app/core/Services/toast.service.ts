import { Injectable } from '@angular/core';


export const TOAST_STATE = {
  success: 'success-toast',
  warning: 'warning-toast',
  danger: 'danger-toast'
};

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
}
