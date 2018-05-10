import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
    {
        component: WelcomeComponent,
        path: 'welcome'
    },
    {
        component: AboutComponent,
        path: 'about'
    },
    {
        path: "",
        redirectTo: 'welcome',
        pathMatch: "full"
    },
    {
        path: "**",
        component: FourOhFourComponent
    }
]

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [ WelcomeComponent, AboutComponent, FourOhFourComponent ];
