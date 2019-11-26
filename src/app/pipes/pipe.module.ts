import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { ToPositionAbbrPipe } from './to-position-abbr.pipe';
import { ToAgePipe } from './to-age.pipe';

@NgModule({
  declarations: [
    EnumToArrayPipe,
    ToPositionAbbrPipe,
    ToAgePipe],
  imports: [
    CommonModule
  ],
  exports: [
    EnumToArrayPipe,
    ToPositionAbbrPipe,
    ToAgePipe
  ]
})
export class PipeModule { }
