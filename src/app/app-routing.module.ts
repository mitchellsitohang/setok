import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LingComponent } from './components/ling/ling.component';

const routes: Routes = [{path: 'ling', component: LingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
