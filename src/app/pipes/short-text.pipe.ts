import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortText' })
export class ShortTextPipe implements PipeTransform {

    transform(text: string, length: number): string {
        return text.length <= length ? text : text.substr(0, length) + '...';
    }
}
