import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../@core/helpers/estudiantes/estudiantes.service';
import { Estudiante } from '../../@core/data/models/estudiante';



@Component({
  selector: 'ngx-apoyo-alimentario-admin',
  templateUrl: './apoyo-alimentario-admin.component.html',
  styleUrls: ['./apoyo-alimentario-admin.component.scss']
})
export class ApoyoAlimentarioAdminComponent implements OnInit {

  _estudiante: Estudiante[];
  allEstudiantes: any ;
  registroEstudiante: [];
  constructor(private _estudianteService: EstudiantesService) {


   }//, private _estudiante:Estudiante

  ngOnInit() {

    this.getEstudiantes();


  }
  getEstudiantes(){
    this._estudianteService.getEstudiantesInfo().subscribe((data)  => this._estudiante = data.estudiantes.estudiante);


  }

}
