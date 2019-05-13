import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  recipesArr = [];

  constructor(private _http: HttpClient) { }

  getRecipes() {
    return this._http.get<Object>("http://localhost:3000/api/recipes");
  }

}
