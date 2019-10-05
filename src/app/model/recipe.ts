import { Direction } from './direction';

export class Recipe {
    public name?: string;
    public level?: string;
    public prepTime?: string;
    public inactiveTime?: string;
    public cookTime?: string;
    public yield?: string;
    public ingredients?: string[];
    public notes?: string[];
    public directions?: Direction[];
    public tags?:string[];
}
