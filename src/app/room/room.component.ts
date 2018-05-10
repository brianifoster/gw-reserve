import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'gw-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})

export class RoomComponent {
    public id: string;
    constructor(
        private _route: ActivatedRoute
    ) {  }

    public ngOnInit() {
        console.log('Room component init');

        this._route.paramMap
        .pipe(
            map(paramMapResponse => {
                return paramMapResponse.get('id') + ' was done mapped';
            })
        )
        .subscribe(mappedResponse => {
            this.id = mappedResponse;
            this._someOtherWorkHere();
        });
    }

    private _someOtherWorkHere() {
        console.log(this.id);
    }
}