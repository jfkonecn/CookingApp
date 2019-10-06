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
      this.form = this.fb.group({
        name: null,
        level: null,
        prepTime: null,
        inactiveTime: null,
        cookTime: null,
        totalTime: null,
        yield: null,
        ingredients: this.fb.array([
          this.fb.group({
            type: this.fb.control(''),
            content: this.fb.control(''),
          }),
          this.fb.group({
            type: this.fb.control(''),
            content: this.fb.control(''),
          })
        ]),
        notes: this.fb.array([
          this.fb.control(''),
        ]),
        // directions: this.fb.array([]),
      });
      this.viewingForm = this.fb.group({
        viewing : true
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
      notes: [
        'hello'
      ],
    });
    of(testRecipe).toPromise().then(x => this.recipe = x);
  }

  

  public get viewing() : boolean {
    return this.viewingForm.value['viewing'];
  }
  public get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }
  public get notes() {
    return this.form.get('notes') as FormArray;
  }
}
