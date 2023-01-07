import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsTauryComponent } from './components/items-taury/items-taury/items-taury.component';
import { ItemsComponent } from './components/items/items.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [
  // { path: '', component: ItemsComponent },
  { path: '', component: ItemsTauryComponent},
  { path: 'registration', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
