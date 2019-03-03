import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(text: string): String {
        if (text.length < 4) {
            return text.toUpperCase();
        } else {
            return text.substr(0, 1).toUpperCase()
                + text.substr(1).toLowerCase();
        }
    }
}