// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkierComponent } from './add-skier/add-skier.component';
import { ListSkierComponent } from './list-skier/list-skier.component';

const routes: Routes = [
  { path: 'add-skier', component: AddSkierComponent },
  { path: 'skier-list', component: ListSkierComponent },
  { path: '', redirectTo: '/add-skier', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
