import { Component, OnInit } from '@angular/core';
import { PixCircle } from '../models/pix-circle';
import { PixListComponent } from '../pix-list/pix-list.component';
import { NgFor } from '@angular/common';
import { PixCircleServices } from '../services/pix-circle.service';


@Component({
  selector: 'app-pix-circle-list',
  imports: [PixListComponent, NgFor],
  templateUrl: './pix-circle-list.component.html',
  styleUrl: './pix-circle-list.component.scss'
})
export class PixCircleListComponent implements OnInit {

  // Tableau de PixCircle au lieu de multiples variables individuelles
  myPixs!: PixCircle[];

  constructor(private pixCircleService: PixCircleServices){}

  ngOnInit() {
    // Initialisation de tous les PixCircle dans un tableau
    // depuis la méthode "getPixCircle()" implémentée dans la
    // class PixCircleServices exportée depuis pix-circle.service.ts
    this.myPixs = this.pixCircleService.getPixCircle();
  }
}
