import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsTauryComponent } from './components/items-taury/items-taury/items-taury.component';
import { ItemsComponent } from './components/items/items.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { RegistrationTableComponent } from './components/registration-table/registration-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsTauryComponent },
  { path: 'registration', component: UserRegistrationComponent},
  { path: 'registration-table', component: RegistrationTableComponent },
  { path: '', component: ItemsTauryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
