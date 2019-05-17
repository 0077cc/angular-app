import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(text: string): string {
        return text.length < 4 ? text.toUpperCase() :
            text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
    }
}
