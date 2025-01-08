import { Injectable } from "@angular/core";
import { PixCircle } from "../models/pix-circle";
import { PixType } from "../models/pix-type.type";

@Injectable ({
  providedIn: 'root', // Dis à Angular qu'il faut enregistrer ce service à la racine du projet
})

export class PixCircleServices {
  private myPixs: PixCircle[] = [
    new PixCircle(
      'Lightning',
      'Ciel d\'orages',
      'https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg',
      new Date(),
      150
    ).withLocation("Asie"),
    new PixCircle(
      'Sands and rocks',
      'Une journée ensoleillée dans le désert.',
      'https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041046_1280.jpg',
      new Date('2024-12-01'),
      15
    ).withLocation("Dans le désert"),
    new PixCircle(
      'Sun down',
      'Coucher de soleil sur la plage.',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      new Date('2024-11-20'),
      30
    ),
    new PixCircle(
      'Highlands',
      'Randonnée en montagne avec une vue imprenable.',
      'https://cdn.pixabay.com/photo/2023/12/24/16/43/autumn-8467482_1280.jpg',
      new Date('2024-10-15'),
      45
    ),
    new PixCircle(
      'City light',
      'Visite d\'une ville historique.',
      'https://cdn.pixabay.com/photo/2024/11/02/17/29/city-9169729_1280.jpg',
      new Date('2024-09-10'),
      25
    )
    ,
    new PixCircle(
      'Snowy milky night',
      'Nuit enneigée avec ciel étoilé',
      'https://cdn.pixabay.com/photo/2023/01/21/13/39/night-sky-7733876_1280.jpg',
      new Date('2024-09-10'),
      25
    )
  ];

  getPixCircle(): PixCircle[] {
    // On retourne une "shallow-copy" du tableau
    return [...this.myPixs];
  }

  // Ajoute la nouvelle Pix provenant du formulaire au début du tableau
  addPix(pix: PixCircle): void {
    if (!pix) {
      throw new Error('Entrée invalide !');
    }
    this.myPixs.unshift(pix); 
  }
  
  // Méthode pour récupérer l'id du pixCircle dans single-pix-circle afin de paramétrer le router qui nous dirigera vers le lien demandé
  getPixCircleById(pixCircleId: string): PixCircle {
    const foundPixCircleById = this.myPixs.find(pixCircle => pixCircle.id === pixCircleId);
    if (!foundPixCircleById) {
      throw new Error(`Oups... Impossible de trouver l'ID : ${pixCircleId}`);
    }
    return foundPixCircleById;
  }

  likePixById(pixCircleId: string, pixType: PixType): void {
    try {
      const PixCircleById = this.getPixCircleById(pixCircleId);
      PixCircleById.like(pixType);
    } catch(e) {
      console.log(`Oups... Seems we cannot find the right ID : ${e}`);
    }
  }
}
