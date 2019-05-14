import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AssetService {
  tools;
  ingredients;

  constructor(private _http: HttpClient) { }

  getIngredients() {
    return this._http.get<any>("http://localhost:3000/api/ingredients");
  }

  getTools() {
    return this._http.get<any>("http://localhost:3000/api/tools");
  }

}
