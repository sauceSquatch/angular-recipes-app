import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Chicken Parm", "A delicious meal", "https://www.simplyrecipes.com/wp-content/uploads/2014/09/chicken-parmesan-horiz-b-1200.jpg"),
    new Recipe("Another Chicken Parm", "A delicious meal", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/1/GL0509_chicken-parmigiana_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371600392952.jpeg"),
    new Recipe("Tacos", "Who doesn't love tacos?", "https://www.vnutritionandwellness.com/wp-content/uploads/2016/06/walnut-meat-tacos-SW.jpg")
  ];

  getRecipes() {
    // slice will return a copy of the recipes
    return this.recipes.slice();
  }

}