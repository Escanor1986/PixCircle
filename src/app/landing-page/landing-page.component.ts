import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  isImageLoading = true;
  landingPageUrlImg = "landing_page.webp";

  constructor(private router: Router) {}

  onContinue(): void {
    this.router.navigateByUrl('pixcircles');
  }

  onImageLoad(): void {
    this.isImageLoading = false; // L'image est chargée, on cache le loader
  }

  onImageError(): void {
    console.error('Image failed to load.');
    this.isImageLoading = false; // Cacher le loader même si l'image échoue
  }
}
