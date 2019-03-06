import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        const out = value.substr(0, limit);
        return out + (value.length > 10 ? ' ...' : '');
    }
}
