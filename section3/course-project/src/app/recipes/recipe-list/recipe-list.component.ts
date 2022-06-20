import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://titaniumfitnessllc.net/wp-content/uploads/3D-Cover-Art-Phase3-Png8-600PX-dark.png'),
    new Recipe('A second test recipe', 'This is simply a test', 'https://titaniumfitnessllc.net/wp-content/uploads/3D-Cover-Art-Phase3-Png8-600PX-dark.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
