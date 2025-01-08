import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  faqs = [
    { question: 'Comment puis-je soumettre une photo ?', answer: 'Vous pouvez soumettre une photo en utilisant le formulaire de soumission disponible sur notre page d\'accueil.', open: false },
    { question: 'Quels types de photos sont acceptés ?', answer: 'Nous acceptons tous les types de photos, à condition qu\'elles respectent nos conditions d\'utilisation.', open: false },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(150)]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Formulaire soumis avec succès', formData);
      // logique pour envoyer les données du formulaire au backend
    } else {
      console.log('Le formulaire contient des erreurs.');
    }
  }

  toggleFaq(faq: any): void {
    faq.open = !faq.open;
  }
}
