import { Pipe, PipeTransform } from '@angular/core';
import { FieldPosition } from '../enums/field-position';

@Pipe({
  name: 'toPositionAbbr'
})
export class ToPositionAbbrPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    switch (value) {
      case FieldPosition.Pitcher:
        return 'P';
      case FieldPosition.Catcher:
        return 'C';
      case FieldPosition.FirstBase:
        return '1B';
      case FieldPosition.SecondBase:
        return '2B';
      case FieldPosition.ShortStop:
        return 'SS';
      case FieldPosition.ThirdBase:
        return '3B';
      case FieldPosition.RightField:
        return 'RF';
      case FieldPosition.CenterRightField:
        return 'CRF';
      case FieldPosition.CenterField:
        return 'CF';
      case FieldPosition.CenterLeftField:
        return 'CLF';
      case FieldPosition.LeftField:
        return 'LF';
      default:
        throw new Error('Invalid position');
    }
  }
}
