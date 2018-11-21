import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ZipcodeCacheComponent } from './components/zipcode-cache/zipcode-cache.component';

@NgModule({
  declarations: [ZipcodeCacheComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
