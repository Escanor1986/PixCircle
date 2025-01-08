import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PixCircle } from '../../models/pix-circle';
import { CommonModule } from '@angular/common';
import { PixCircleServices } from '../../services/pix-circle.service';

@Component({
  selector: 'app-add-pix',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-pix.component.html',
  styleUrls: ['./add-pix.component.scss'],
})
export class AddPixComponent {
  @Input() pixCircle!: PixCircle;

  pixForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
    createdDate: new FormControl(new Date(), Validators.required),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]),
    location: new FormControl('', Validators.maxLength(100)),
  });

  constructor(private pixCircleServices: PixCircleServices) {}

  onSubmit() {
    if (this.pixForm.valid) {
      const { title, description, createdDate, imageUrl, location } =
        this.pixForm.value;
      const newPix = new PixCircle(
        title!,
        description!,
        imageUrl!,
        new Date(createdDate!),
        0 // Initialise les likes à 0 ou une autre valeur par défaut
      );
      if (location) {
        newPix.withLocation(location);
      }
      this.pixCircleServices.addPix(newPix);
      console.log('Formulaire soumis', newPix);
      // Réinitialise le formulaire après soumission
      this.pixForm.reset();
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
