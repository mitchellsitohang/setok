import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsTauryComponent } from './components/items-taury/items-taury/items-taury.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: 'home', component: ItemsComponent },
  { path: 'items', component: ItemsTauryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
