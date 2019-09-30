import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { TranslateService } from '@ngx-translate/core';
import { CRPHelper } from '../../../@core/helpers/crp/crpHelper';
import { RequestManager } from '../../../@core/managers/requestManager';


@Component({
  selector: 'ngx-consulta-crp',
  templateUrl: './consulta-crp.component.html',
  styleUrls: ['./consulta-crp.component.scss']
})
export class ConsultaCrpComponent implements OnInit {
  uuidReadFieldName: string;
  loadDataFunction: (...params) => Observable<any>;
  formTittle: string;
  loadFormDataFunction: (...params) => Observable<any>;
  isOnlyCrud: boolean;
  settings: object;
  auxcambiotab: boolean = false;
  listColumns: object;
  solicitudcrp: object;

  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService,
    private crpHelper: CRPHelper,
    private rqManager: RequestManager, ) { }

  ngOnInit() {
    this.loadDataFunction = this.crpHelper.getSolicitudesCRP;


    this.listColumns = {
      vigencia: {
        title: this.translate.instant('GLOBAL.placeholder_vigencia'),
        // type: 'string;',
        valuePrepareFunction: value => {
          return value;
        }
      },
      centroGestor: {
        title: this.translate.instant('GLOBAL.centro_gestor'),
        // type: 'string;',
        valuePrepareFunction: value => {
          return value;
        }
      },
      entidad: {
        title: this.translate.instant('GLOBAL.unidad-ejecutora'),
        // type: 'string;',
        valuePrepareFunction: value => {
          return value;
        }
      },
      consecutivo: {
        title: this.translate.instant('CRP.n_solicitud'),
        // type: 'string;',
        valuePrepareFunction: value => {
          return value;
        }
      }
    };

    this.settings = {
      actions: {
        add: false,
        edit: false,
        delete: false,
        custom: [{ name: 'Ver', title: '<div class="container-fluid"><i class="fas fa-eye" (click)="ver($event)">ver</i></div>' }],
        position: 'right'
      },
      mode: 'external',
      columns: this.listColumns,
    };

    this.loadData();


  }


  loadData(): void {
    this.loadDataFunction('').subscribe(res => {
      if (res !== null) {
        console.info('res', res);
        const data = <Array<any>>res;
        this.source.load(data);
      } else {
        this.source.load([]);
      }
    });
  }

  verSolicitud(scrp) {
    console.info(scrp);
    this.solicitudcrp = scrp;
  }

  onCustom(event: any) {
    switch (event.action) {
      case 'ver':
        this.verSolicitud(event.data);
    }
    // this.actaSeleccionada = `${event.data.Id}`;
    // this.estadoActaSeleccionada = `${event.data.Estado}`;
    // this.accion = `${event.action}`;
  }



}
