import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipesArr: any;

  constructor(private _recipes: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this._recipes.getRecipes().subscribe(data => {
      this.recipesArr = data;
      console.log(this.recipesArr);
    });
  }

}
