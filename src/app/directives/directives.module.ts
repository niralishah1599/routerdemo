import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeDirective } from 'src/app/directives/grade.directive';
import {InputDirectiveDirective} from 'src/app/directives/input-directive.directive';




@NgModule({
  declarations: [
    GradeDirective,
    InputDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GradeDirective,
    InputDirectiveDirective
  ]

})
export class DirectivesModule { }
