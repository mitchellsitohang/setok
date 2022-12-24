import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsTauryComponent } from './components/items-taury/items-taury/items-taury.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsTauryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
