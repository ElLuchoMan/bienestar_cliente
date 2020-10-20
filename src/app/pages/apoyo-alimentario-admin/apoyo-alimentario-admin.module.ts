import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NbMenuModule, NbSpinnerModule, NbThemeModule } from '@nebular/theme';

import { ApoyoAlimentarioAdminComponent } from './apoyo-alimentario-admin.component';
//import { EstudiantesComponent } from './estudiantes/estudiantes.component';
//import { EstudiantesService } from '../../@core/helpers/estudiantes/estudiantes.service';

@NgModule({
  declarations: [
    ApoyoAlimentarioAdminComponent,

  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbMenuModule,
    NbSpinnerModule,
    NbThemeModule,
    CommonModule
  ]
})
export class ApoyoAlimentarioAdminModule { }
