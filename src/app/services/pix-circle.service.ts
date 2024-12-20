import { Injectable } from "@angular/core";
import { PixCircle } from "../models/pix-circle";

@Injectable ({
  providedIn: 'root', // Dis à Angular qu'il faut enregistrer ce service à la racine du projet
})

export class PixCircleServices {
  private myPixs: PixCircle[] = [
    new PixCircle(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      150
    ),
    new PixCircle(
      'Bella',
      'Une journée ensoleillée dans le désert.',
      'https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041046_1280.jpg',
      new Date('2024-12-01'),
      15
    ).withLocation("Dans le désert"),
    new PixCircle(
      'Charlie',
      'Coucher de soleil sur la plage.',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      new Date('2024-11-20'),
      30
    ),
    new PixCircle(
      'Daisy',
      'Randonnée en montagne avec une vue imprenable.',
      'https://cdn.pixabay.com/photo/2023/12/24/16/43/autumn-8467482_1280.jpg',
      new Date('2024-10-15'),
      45
    ),
    new PixCircle(
      'Max',
      'Visite d\'une ville historique.',
      'https://cdn.pixabay.com/photo/2024/11/02/17/29/city-9169729_1280.jpg',
      new Date('2024-09-10'),
      25
    )
  ];

  getPixCircle(): PixCircle[] {
    // On retourne une "shallow-copy" du tableau
    return [...this.myPixs];
  }
}
