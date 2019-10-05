import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  recipe : Recipe;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    const testRecipe : Recipe = 
    {
      name: name,
      level: 'easy',
      prepTime: '50 mins',
      inactiveTime: '10 mins',
      cookTime: '20 mins',
      yield: '4 things',
      ingredients: [
        {
          type:'string',
          content:'5 eggs',
        },
        {
          type:'recipeName',
          content:'some other c',
        }
      ],
      notes: [
        'eat when hot'
      ],
      directions: [
        {
          priority: 1,
          direction: 'Sleep'
        },
        {
          priority: 2,
          direction: 'Pet Pigs'
        }
      ],
      tags:[
        'Pigs',
        'Otters'
      ]
    }
    of(testRecipe).toPromise().then(x => this.recipe = x);
  }

}
