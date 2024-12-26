import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { PixCircle } from '../models/pix-circle';
import { PixCircleServices } from '../services/pix-circle.service';

@Component({
  selector: 'app-pix-list',
  // Importe les fonctionnalités de base (ngIf, ngFor, etc.)
  imports: [CommonModule, NgClass, NgStyle, TitleCasePipe, DatePipe], 
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

  constructor(private pixCircleServices: PixCircleServices) {
  }

  ngOnInit(): void {
    this.hasLiked = false;
    this.likeButton = "Oh Pix!";
  }

  // Le nom de méthode qui commence par on signale que cette méthode répond à un événement.
  onLike(): void {
    this.hasLiked = !this.hasLiked; 
    this.likeButton = this.hasLiked ? "Oups ! unPix ?" : "Oh Pix!";
    this.hasLiked ? this.pixCircleServices.likePixById(this.pixCircle.id, 'liked') : this.pixCircleServices.likePixById(this.pixCircle.id, 'unliked');
  }
  
}
