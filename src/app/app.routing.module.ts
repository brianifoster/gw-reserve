import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './notfound/notfound.component';

const routes: Route[] = [
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent
        
    },
    {
        path: "",
        redirectTo: 'welcome',
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [ WelcomeComponent, AboutComponent, NotFoundComponent ];
