import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  allRecipesArr = [];

  constructor(private _http: HttpClient) { }

  getAllRecipes() {
    return this._http.get<Object>("http://localhost:3000/api/recipesAll");
  }
  
  postRecipe(postObj: Object) {
    this._http.post<Object>("http://localhost:3000/api/recipes", postObj).subscribe(data => {
      console.log(data);
    });
  }

}
