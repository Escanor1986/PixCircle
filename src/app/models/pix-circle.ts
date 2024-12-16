export class PixCircle {
  title: string;
  description: string;
  createdDate: Date;
  likes: number;
  imageUrl: string;

  constructor(
    title: string,
    description: string,
    imageUrl: string,
    createdDate: Date,
    likes: number
  ) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.likes = likes;
  }

  addLike() {
    this.likes++;
  }

  removeLike() {
    this.likes--;
  }
}
