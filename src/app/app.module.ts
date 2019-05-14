import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';
import { RecipeComponent } from './components/recipes/child/recipe/recipe.component';
import { CreatecontainerComponent } from './components/create-recipe/child/createcontainer/createcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    CreateRecipeComponent,
    NavbarComponent,
    HomeComponent,
    RecipeComponent,
    CreatecontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
