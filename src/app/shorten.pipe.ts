import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        const out = value.substr(0, 10);
        return out + (value.length > 10 ? ' ...' : '');
    }
}
