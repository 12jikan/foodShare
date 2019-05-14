import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../services/recipe.service';
import { AssetService } from '../../../../services/assets.service';

@Component({
  selector: 'app-createcontainer',
  templateUrl: './createcontainer.component.html',
  styleUrls: ['./createcontainer.component.scss']
})
export class CreatecontainerComponent implements OnInit {

  constructor(private _recipes: RecipeService, private _assets: AssetService) { }

  postObj: Object = {
    name:  "",
    title: "",
    desc:  "",
    steps: Object,
  }

  tools: Object;
  ingredients: Object;
  
  _tool: any="Select dropdown";
  _ingredients: any ="Select dropdown";

  toolsTable = [];
  ingredientsTable = [];

  ngOnInit() {
    this.getIngredients();
    this.getTools();
  }

  postRecipe() {
    this._recipes.postRecipe(this.postObj);
  }

  getIngredients() {
    this._assets.getIngredients().subscribe(data => {
      this.ingredients = data.assets;
      console.log(this.ingredients);
    });
  }

  getTools() {
    this._assets.getTools().subscribe(data => {
      this.tools = data.assets;
      console.log(this.tools);
    });
  }

  addIngredients() {
    if(this.ingredientsTable.find(data => data == this._ingredients));
    
    this.ingredientsTable.push(this._ingredients);
    console.log(this._ingredients, this.ingredientsTable);
  }

  addTools() {
    console.log(this._tool)
  }

}
