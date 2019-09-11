export class Ingredient {
  // public name:string;
  // public amount:string;
  // TypeScript gives us a shortcut to allow the public functions to be defined on the constructor so we do not need to define multiple places
  constructor(public name:string, public amount:number){

  }
}