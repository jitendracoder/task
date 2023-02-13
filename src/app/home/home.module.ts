import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { DatafilterPipe } from '../pipe/datafilter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    DatafilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule {
}
