import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  
  @Input() allRecipesArr: Object;
  openDesc: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  showDesc() {
    if(this.openDesc) {
      this.openDesc = false;
    } 
    else {
      this.openDesc = true;
    }
  };
}
