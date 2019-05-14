import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  objKeys = Object.values;
  allRecipesArr: Object;

  constructor(private _recipes: RecipeService) { }

  ngOnInit() {
    this.getAllRecipes();
  }
  
  getAllRecipes() {
    this._recipes.getAllRecipes().subscribe(data => {
      
      this.allRecipesArr;
      console.log(this.allRecipesArr);

    });
  };
}
