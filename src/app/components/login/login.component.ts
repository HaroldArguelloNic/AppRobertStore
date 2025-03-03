import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UtilidadService} from '../../core/Services/utilidad.service';
import {UsuarioService} from '../../core/Services/usuario.service';
import {Router} from '@angular/router';
import {Login} from '../../core/Model/login';
import {NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formularioLogin: FormGroup;
  mostrarCarga: boolean=true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _usuarioService:UsuarioService,
              private _utilidadService:UtilidadService,) {

    this.formularioLogin = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {

  }

  iniciarSesion() {
    this.mostrarCarga = true;
    const request: Login = {
      email: this.formularioLogin.value.email,
      password: this.formularioLogin.value.password
    };

    this._usuarioService.IniciarSesion(request).subscribe({
      next: (data) => {
        if (data.status) {
          this._utilidadService.guardarSesionUsuario(data.value);
          this.router.navigate(["/"]);
        } else {
          //this._utilidadService.mostrarAlerta("No se Encontraron Coincidencias");
        }
      },
      error: (error) => {

        //this._utilidadService.mostrarError( "Error Inesperado!");
      },
      complete: () => {
       this.mostrarCarga = false;
      }
    });
  }

}
