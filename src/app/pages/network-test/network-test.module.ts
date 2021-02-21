import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkTestPageRoutingModule } from './network-test-routing.module';

import { NetworkTestPage } from './network-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkTestPageRoutingModule
  ],
  declarations: [NetworkTestPage]
})
export class NetworkTestPageModule {}
