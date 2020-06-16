import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TitleModule } from '@albums/shared';
import { LibSharedButtonModule } from '@shared/components';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule,
    LibSharedButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
