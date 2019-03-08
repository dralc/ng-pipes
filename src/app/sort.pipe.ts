import { Pipe, PipeTransform, ElementRef } from '@angular/core';
import { ServerInfo } from './serverInfo.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  /**
   * Sorts an Array of Objects by the object <key>'s value
   * @returns The sorted <inputAr>
   */
  transform(inputAr: Array<Object>, key: string): Array<Object> {

    if (!key) { return inputAr; }

    inputAr.sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        valA = valA.toUpperCase();
        valB = valB.toUpperCase();
      }

      return valA < valB ? -1 : (valA > valB ? 1 : 0);
    });

    return inputAr;
  }
}
