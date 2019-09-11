import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Parm', 
      'A delicious meal', 
      'https://www.simplyrecipes.com/wp-content/uploads/2014/09/chicken-parmesan-horiz-b-1200.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 25)
      ]),
    new Recipe(
      'Another Chicken Parm', 
      'A delicious meal', 
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/1/GL0509_chicken-parmigiana_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371600392952.jpeg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('French Fries', 25)
      ]),
    new Recipe(
      'Tacos', 
      'Who loves tacos?',
      'https://www.vnutritionandwellness.com/wp-content/uploads/2016/06/walnut-meat-tacos-SW.jpg',
      [
        new Ingredient('Taco Meat', 1),
        new Ingredient('Beans and Rice', 1)
      ])
  ];

  constructor(private slService:ShoppingListService) {}

  getRecipes() {
    // slice will return a copy of the recipes
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}