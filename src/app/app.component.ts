import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixCircleListComponent } from './pix-circle-list/pix-circle-list.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, PixCircleListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
