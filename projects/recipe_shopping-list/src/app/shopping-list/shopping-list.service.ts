import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
      getIngredients(){
          return this.ingredients.slice(); // only a copy
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
      }
}