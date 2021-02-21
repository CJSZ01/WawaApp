import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkTestPage } from './network-test.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkTestPageRoutingModule {}
