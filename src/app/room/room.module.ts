import { NgModule } from "@angular/core";

import {  RoomRoutingModule, routingComponents } from './room.routing.module';

import { RoomService } from './../services/room.service';

@NgModule({
    imports: [ RoomRoutingModule ],
    providers: [ RoomService ],
    declarations: [ routingComponents ]
})
export class RoomModule { }