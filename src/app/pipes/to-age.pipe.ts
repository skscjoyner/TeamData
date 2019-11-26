import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toAge'
})
export class ToAgePipe implements PipeTransform {
  transform(value: Date, ...args: any[]): number {
    return this.getAge(value);
  }

  getAge(birthDate: Date) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
