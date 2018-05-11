import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppRoutingModule, routingComponents } from './app.routing.module';
import { RoomModule } from './room/room.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';




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
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    providers: [
        AngularFireAuth
    ],
    bootstrap: [ //base module, tell angular what component we'll be bootstrapping
        AppComponent //choosing the component that boots
    ]
})

export class AppModule {
}