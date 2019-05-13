import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
