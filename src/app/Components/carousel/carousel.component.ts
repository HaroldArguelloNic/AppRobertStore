import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  public slides = [
    { src: "/img/baner1.jpg" },
    { src: "/img/baner2.jpg" },
    { src: "/img/baner3.jpg" },
  ];

}
