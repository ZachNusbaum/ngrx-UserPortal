import { ZipcodeCacheComponent } from './components/zipcode-cache/zipcode-cache.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'reports', children: [
    {path: 'zipcodes', component: ZipcodeCacheComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
