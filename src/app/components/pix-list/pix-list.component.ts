import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixCircle } from '../../models/pix-circle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-list',
  // Importe les fonctionnalités de base (ngIf, ngFor, etc.)
  imports: [CommonModule],
  templateUrl: './pix-list.component.html',
  styleUrls: ['./pix-list.component.scss'],
})
export class PixListComponent {
  // Pour qu'une propriété puisse être injectée depuis l'extérieur d'un component, il faut lui ajouter le décorateur  @Input()
  // @Input()  crée comme un attribut HTML auquel on peut lier une valeur
  // Input  doit être ajouté aux imports depuis  @angular/core
  @Input() pixCircle!: PixCircle;

  constructor(private router: Router) {}

  // Cette méthode est utilise le service "Router" pour diriger vers une nouvelle route en incluans l'ID du  Pix sélectionné dans l'URL.
  onViewPix() {
    // La méthode navigateByUrl "construit" l'URL de destination en incluant l'ID demandé.
    this.router.navigateByUrl(`pixcircles/${this.pixCircle.id}`);
  }
}
