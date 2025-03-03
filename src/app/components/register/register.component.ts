import {Component,} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Customer} from '../../core/Model/Customer';
import {CustomerService} from '../../core/Services/customer.service';
import {Usuario} from '../../core/Model/usuario';
import {UsuarioService} from '../../core/Services/usuario.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formularioRegister = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService,
              private usuarioService: UsuarioService,
              private router: Router,
  ) {}
  GuardarUsuario() {
    const requestCustomer : Customer = {
      name: this.formularioRegister.value.nombre as string,
      last_name: this.formularioRegister.value.apellido as string,
      address: this.formularioRegister.value.direccion as string,
      email: this.formularioRegister.value.email as string,
      password: this.formularioRegister.value.password as string,
      phone: this.formularioRegister.value.phone as string,
      active: 1,
    };
    const requestUser : Usuario = {
      name: this.formularioRegister.value.nombre as string,
      email: this.formularioRegister.value.email as string,
      password: this.formularioRegister.value.password as string,
      active: 1,
      rol_id: 3,
    }
    this.usuarioService.Guardar(requestUser).subscribe({
      next: (data) =>{
        if(data.status){
          this.customerService.Guardar(requestCustomer).subscribe({
            next: (data) => {
              if (data.status) {
                this.router.navigateByUrl('login');
              }
            }

          });
        }
      }
    })


  }

}
