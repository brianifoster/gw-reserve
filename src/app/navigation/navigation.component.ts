import { Component, OnInit } from '@angular/core';
import { INavigationItem } from './../../interfaces/INavigationItem';
import { RoomService } from '../services/room.service';
import { Router } from '@angular/router';
import { IRoom } from '../../interfaces/IRoom';

import { map } from 'rxjs/operators'

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
        this._roomService.rooms.pipe(
            map( (room: IRoom[])  => {
                const navItems: INavigationItem[] = room.map( eachRoom => {
                    return {
                        title: eachRoom.title,
                        url: 'room/' + eachRoom.id
                    };
                })
            return navItems;
        }))
    //  .subscribe(results => {
        .subscribe(navItems => {
            this.menuItems = [].concat(this.menuItems, navItems);
        })
        
    }
}