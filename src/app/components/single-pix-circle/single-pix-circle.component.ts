import { Component } from '@angular/core';
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
} from '@angular/common';
import { PixCircle } from '../../models/pix-circle';
import { PixCircleServices } from '../../services/pix-circle.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-pix-circle',
  imports: [
    CommonModule,
    NgClass,
    DatePipe,
    NgStyle,
    TitleCasePipe,
    RouterLink,
  ],
  templateUrl: './single-pix-circle.component.html',
  styleUrl: './single-pix-circle.component.scss',
})
export class SinglePixCircleComponent {
  pixCircle!: PixCircle;

  hasLiked!: boolean;
  likeButton!: string;

  // Ici on injecte le service ActivatedRoute qui va fournir des informations sur la route actuellement activée
  constructor(
    private pixCircleServices: PixCircleServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getPixCircle();
  }

  // Le nom de méthode qui commence par on signale que cette méthode répond à un événement.
  onLike(): void {
    this.hasLiked = !this.hasLiked;
    this.likeButton = this.hasLiked ? 'UnPix ?' : 'Pix ?';
    this.hasLiked
      ? this.pixCircleServices.likePixById(this.pixCircle.id, 'liked')
      : this.pixCircleServices.likePixById(this.pixCircle.id, 'unliked');
  }

  private getPixCircle() {
    // On récupère l'ID de la route que l'on capture dans l'URL avec la méthode "snapshot.params()"
    const pixCircleId = this.route.snapshot.params['id'];
    // On récupère le Pix voulu en le sélectionnant via cet ID récupéré dans l'URL
    this.pixCircle = this.pixCircleServices.getPixCircleById(pixCircleId);
  }

  private prepareInterface() {
    this.hasLiked = false;
    this.likeButton = 'Pix ?';
  }
}
