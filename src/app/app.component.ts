import { Component, OnInit } from '@angular/core';
import { PixListComponent } from "./pix-list/pix-list.component";
import { PixCircle } from './models/pix-circle';

@Component({
  selector: 'app-root',
  imports: [PixListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myPix!: PixCircle;
  myPix1!: PixCircle;
  myPix2!: PixCircle;
  myPix3!: PixCircle;
  myPix4!: PixCircle;

  ngOnInit() {
    this.myPix = new PixCircle(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.myPix1 = new PixCircle(
      'Bella',
      'Une journée ensoleillée au parc.',
      'https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041046_1280.jpg',
      new Date('2024-12-01'),
      15
    );
    
    this.myPix2 = new PixCircle(
      'Charlie',
      'Randonnée en montagne avec une vue imprenable.',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      new Date('2024-11-20'),
      30
    );
    
    this.myPix3 = new PixCircle(
      'Daisy',
      'Coucher de soleil sur la plage.',
      'https://cdn.pixabay.com/photo/2023/12/24/16/43/autumn-8467482_1280.jpg',
      new Date('2024-10-15'),
      45
    );
    
    this.myPix4 = new PixCircle(
      'Max',
      'Visite d\'une ville historique.',
      'https://cdn.pixabay.com/photo/2022/05/06/20/19/forest-7179046_1280.jpg',
      new Date('2024-09-10'),
      25
    );
    
  }
}
