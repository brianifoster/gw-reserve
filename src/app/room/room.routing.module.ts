import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RoomComponent } from './room.component';
import { FormComponent } from './reservations/form/form.component';
import { ListComponent } from './reservations/list/list.component';

const routes: Route[] = [
    {
        path: 'room/:id',
        component: RoomComponent,

        children: [
            {
                path: 'form',
                component: FormComponent
            },
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RoomRoutingModule { }

export const routingComponents = [ RoomComponent, ListComponent, FormComponent ];