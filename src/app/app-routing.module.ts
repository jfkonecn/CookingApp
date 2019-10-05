import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRecipeComponent } from './recipes/view-recipe/view-recipe.component';

const routes: Routes = [
  { path: 'recipe/:name', component: ViewRecipeComponent }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
