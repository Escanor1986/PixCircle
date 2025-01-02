import { PixType } from "./pix-type.type";

export class PixCircle {
  // Propriétés de la classe PixCircle
  title: string; 
  description: string; 
  createdDate: Date;
  likes: number;
  imageUrl: string; 
  location?: string; // Propriété optionnelle, représente la localisation associée à l'image
  id: string;

  constructor(
    title: string, 
    description: string, 
    imageUrl: string, 
    createdDate: Date, 
    likes: number, 
    location?: string // Localisation optionnelle, peut être undefined
  ) {
    
    // Initialisation des propriétés de l'instance
    this.title = title; 
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.likes = likes;
    this.location = location; // La localisation est optionnelle, elle peut être undefined
    this.id = crypto.randomUUID().substring(0, 20);
    console.table(this);
  }

  // Méthode pour ajouter un "like" à l'image
  addLike() {
    this.likes++; 
  }

  // Méthode pour retirer un "like" de l'image
  removeLike() {
    this.likes--;  
  }

  like(pixType: PixType) {
    if (pixType === "liked") {
      this.addLike();
    } else if (pixType === "unliked") {
      this.removeLike();
    }
  }

  // Méthode pour définir ou mettre à jour la localisation de l'image
  setLocation(location: string): void {
    this.location = location; 
  }

  withLocation(location: string): PixCircle {
    this.setLocation(location);
    return this;
  }
}
