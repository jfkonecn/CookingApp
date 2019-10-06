import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { of, Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  form: FormGroup;
  viewingForm: FormGroup;
  recipe : Recipe;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { 
      this.viewingForm = this.fb.group({
        viewing: true
      });
    }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    const testRecipe : Recipe = 
    {
      name: name,
      level: 'easy',
      prepTime: '50 mins',
      inactiveTime: '10 mins',
      cookTime: '20 mins',
      totalTime: '20 mins',
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
        'Sleep',
        'Pet Pigs'
      ],
      tags:[
        'Pigs',
        'Otters'
      ]
    }

    of(testRecipe).toPromise().then(x => {
      this.CreateForm(x);
      this.recipe = x;
    });
  }

  

  public get viewing() : boolean {
    return this.viewingForm.value['viewing'];
  }

  public get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  public addIngredient() {
    this.ingredients.push(this.fb.group({
      type: this.fb.control(''),
      content: this.fb.control(''),
    }));
  }

  public get directions() {
    return this.form.get('directions') as FormArray;
  }

  public addDirection() {
    this.directions.push(this.fb.control(''));
  }

  public get notes() {
    return this.form.get('notes') as FormArray;
  }
  
  public addNote() {
    this.notes.push(this.fb.control(''));
  }

  private CreateForm(recipe : Recipe) {
    this.form = this.fb.group({
      name: null,
      level: null,
      prepTime: null,
      inactiveTime: null,
      cookTime: null,
      totalTime: null,
      yield: null,
      ingredients: this.fb.array([]),
      directions: this.fb.array([]),
      notes: this.fb.array([]),
    });
    recipe.ingredients.forEach(ingredient => {
      this.addIngredient();
    });
    recipe.directions.forEach(direction => {
      this.addDirection();
    });
    recipe.notes.forEach(note => {
      this.addNote();
    });
    // this.form.setValue(recipe);
    this.form.setValue({
      name: null,
      level: null,
      prepTime: null,
      inactiveTime: null,
      cookTime: null,
      totalTime: null,
      yield: null,
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
      directions: [
        'Sleep',
        'Pet Pigs'
      ],
      notes: [
        'hello'
      ],
    });
  }
  
}
