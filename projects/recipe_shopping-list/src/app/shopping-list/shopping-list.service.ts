import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
      getIngredients(){
          return this.ingredients.slice(); // only a copy
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice())
      }

      addIngredients(ingredients:Ingredient[]){
        //   for(let ingredient of ingredients){
        //    this.addIngredient(ingredient);
        //   } due to more emit this approach is not better , but is ok
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}