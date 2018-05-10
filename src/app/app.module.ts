import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app.routing.module';
import { RoomModule } from './room/room.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';




@NgModule({
    declarations: [ //tell angular about its components
        AppComponent,
        NavigationComponent,
        LoginComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        RoomModule,
        AppRoutingModule,
    ],
    bootstrap: [ //base module, tell angular what component we'll be bootstrapping
        AppComponent //choosing the component that boots
    ]
})

export class AppModule {
}