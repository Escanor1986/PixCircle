import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixCircle } from '../models/pix-circle';

@Component({
  selector: 'app-pix-list',
  imports: [CommonModule], // Importe les fonctionnalités de base (ngIf, ngFor, etc.)
  templateUrl: './pix-list.component.html',
  styleUrls: ['./pix-list.component.scss']
})

export class PixListComponent {
  // Pour qu'une propriété puisse être injectée depuis l'extérieur d'un component, il faut lui ajouter le décorateur  @Input()
  // @Input()  crée comme un attribut HTML auquel on peut lier une valeur
  // Input  doit être ajouté aux imports depuis  @angular/core
  @Input() pixCircle!: PixCircle;

  hasLiked!: boolean;
  likeButton!: string;

  ngOnInit(): void {
    this.hasLiked = false;
    this.likeButton = "Oh Pix!";
  }

  // Le nom de méthode qui commence par on signale que cette méthode répond à un événement.
  onLike(): void {
    if (this.hasLiked === false) {
      this.pixCircle.addLike();
      this.likeButton = "Oups ! unPix ?"
      this.hasLiked = true;
    } else {
      this.pixCircle.removeLike;
      this.likeButton = "Oh Pix!"
      this.hasLiked = false;
    }
  }
}
