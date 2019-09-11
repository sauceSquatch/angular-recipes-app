import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  // @Output() recipeClick = new EventEmitter<void>();

  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onRecipeClick() {
    // this.recipeClick.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
