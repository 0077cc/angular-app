import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { State } from 'src/app/app.enums';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
    @Input() question: string;
    @Input() isActive: boolean;

    @Output() response: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void { }

    onClick(confirmation: boolean): void {
        this.response.emit(confirmation);
    }
}
