import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Object>, filterString: string, prop: string): any {
    if (value.length === 0) {
      return;
    }

    if (!filterString.trim()) {
      return value;
    }

    const keepAr = [];
    const re = new RegExp(`^${filterString}`, 'i');

    for (const it of value) {
      if ( re.test(it[prop]) ) {
        keepAr.push(it);
      }
    }

    return keepAr;
  }

}
