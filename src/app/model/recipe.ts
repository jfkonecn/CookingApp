import { Direction } from './direction';
import { Ingredient } from './ingredient';

export class Recipe {
    public name?: string;
    public level?: string;
    public prepTime?: string;
    public inactiveTime?: string;
    public cookTime?: string;
    public totalTime?: string;
    public yield?: string;
    public ingredients?: Ingredient[];
    public notes?: string[];
    public directions?: Direction[];
    public tags?:string[];
}
