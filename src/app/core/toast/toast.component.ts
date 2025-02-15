import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ToastService} from '../Services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [
    NgIf
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})

export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) { }


  ngOnInit(): void {

  }

}
