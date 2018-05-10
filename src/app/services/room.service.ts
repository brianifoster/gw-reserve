import { Injectable } from "@angular/core";
import { IRoom } from "../../interfaces/IRoom";

@Injectable()
export class RoomService {
    public rooms: IRoom[];

    constructor() {
        this.rooms = [{
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
        }];
    }
}