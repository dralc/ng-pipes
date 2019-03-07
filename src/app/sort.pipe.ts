import { Pipe, PipeTransform, ElementRef } from '@angular/core';
import { ServerInfo } from './serverInfo.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(ar: Array<ServerInfo>, prop: string): any {

    if (!prop) { return ar; }

    ar.sort((a, b) => {
      let valA = a[prop];
      let valB = b[prop];

      if (typeof valA === 'string' && typeof valB === 'string') {
        valA = valA.toUpperCase();
        valB = valB.toUpperCase();
      }

      return valA < valB ? -1 : (valA > valB ? 1 : 0);
    });

    return ar;
  }
}
