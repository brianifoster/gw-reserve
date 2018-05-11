import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

// importing an observable creation method
import { of } from 'rxjs/observable/of';

// import operators to combine or mutate data
import { map, tap, mergeMap, take, retry } from 'rxjs/operators';

import { IRoom } from "../../interfaces/IRoom";

@Injectable()
export class RoomService {
    public rooms: Observable<IRoom[]>;

    constructor() {
        this.rooms = of([{
            id: "1",
            title: "Starfox",
            picture: "starfox.jpg"
        }, {
            id: "2",
            title: "Halo",
            picture: "halo.jpg"
        }, {
            id: "3",
            title: "Sonic",
            picture: "sonic.jpg"
        }, {
            id: "4",
            title: "Zelda",
            picture: "zelda.jpg"
        }]);
    }
}