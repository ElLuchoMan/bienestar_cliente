import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InscripcionEstComponent} from './inscripcion-estudiante/inscripcion-est.component';
import {RevisionInscComponent} from './revision-insc/revision-insc.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ApoyoAlimentarioComponent } from './apoyo-alimentario/apoyo-alimentario.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'inscripcion',
            component: InscripcionEstComponent,
        },
        {
            path: 'revision',
            component: RevisionInscComponent,
        },
        {
            path: 'apoyo-alimentario',
            component: ApoyoAlimentarioComponent,
        },
        {
            path: 'home',
            component: HomeComponent,
        },
        /* {
            path: '',
            redirectTo: 'inscripcion',
            pathMatch: 'full',
        }, */
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
        {
            path: '**',
            component: NotFoundComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
