import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: String, args?: any): any {

    const valAr = value.split('');
    return valAr.reverse().join('');
  }

}
