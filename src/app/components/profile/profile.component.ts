import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../core/Services/customer.service';
import {UsuarioService} from '../../core/Services/usuario.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  formularioProfile = new FormGroup({
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
  ) {

  }

  ngOnInit() {
    //  this.showProfile()


  }
  showProfile() {

    //this.customerService.obtenerPerfil(email).subscribe({
    //  next: data => {
    //    this.formularioProfile = data.value;
    //  }

    //})

  }
}
