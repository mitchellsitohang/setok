import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TauryComponent } from './components/taury/taury.component';

const routes: Routes = [{path: 'taury', component: TauryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
