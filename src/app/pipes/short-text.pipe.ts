import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortText' })
export class ShortTextPipe implements PipeTransform {

	transform(text: string, length: number): String {
		if (text.length <= length) {
			return text;
		}

		return text.substr(0, length) + '...';
	}
}