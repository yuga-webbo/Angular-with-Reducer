import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { FeatureListComponent } from './feature-list/feature-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FeatureListComponent,
  //   data: { title: 'anms.menu.features' }
  // },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'anms.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureListRoutingModule {}
