import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AgendamientoCitasGuard } from '../@core/_guards/agendamiento-citas.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'agendamiento-citas',
      loadChildren: () => import('./agendamiento-citas/agendamiento-citas.module')
      .then(m => m.AgendamientoCitasModule),
      canActivate: [AgendamientoCitasGuard]
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'plan-cuentas',
      loadChildren: () => import('./plan-cuentas/plan-cuentas.module')
      .then(m => m.PlanCuentasModule),
    },
    {
      path: '',
      redirectTo: 'plan-cuentas',
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
