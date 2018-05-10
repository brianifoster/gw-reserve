import { Component, OnInit } from '@angular/core';
import { INavigationItem } from './../../interfaces/INavigationItem';
import { RoomService } from '../services/room.service';
import { Router } from '@angular/router';

@Component({
    selector: 'gw-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.scss'
    ]
})

export class NavigationComponent implements OnInit {
    public navigation: string = 'navigation';
    public menuItems: INavigationItem[] = [{
        title: "Welcome",
        url: "welcome"
    },
    {
        title: "About",
        url: "about"
    },
    ]
    constructor(

        private _roomService: RoomService,
        private _router: Router
        
    ) { }

    ngOnInit() {
        const roomItems: INavigationItem[] = this._roomService.rooms.map(room => {
            return {
                title: room.title,
                url: 'room/' + room.id
            };
        });
        this.menuItems = [].concat(this.menuItems, roomItems);
    }
}