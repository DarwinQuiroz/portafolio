import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Project } from '../models/project.model';

import swal from 'sweetalert';
import { UploadService } from './upload.service';

@Injectable()
export class ProjectService 
{
  projectList: AngularFireList<any>;
  project: Project = new Project();

  constructor(private firebase: AngularFireDatabase) { }

  getProjects()
  {
    this.projectList = this.firebase.list('/projects');

    return this.projectList.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    });
  }

  getProject(key)
  {
    this.projectList = this.firebase.list('/projects', ref => ref.orderByKey().equalTo(key));
    return this.projectList.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  insert(project: Project)
  {    
    this.projectList.push(project).then(() => {
      swal('Proyecto Creado.!', project.title, 'success');
    });
  }

  update(key, project)
  {
    this.projectList.update(key, project).then(() => {
      swal('Proyecto Actualizado.!', project.title, 'success');
    }).catch((error) => {
      swal('Ocurrio un error.!', error.message, 'error');
    });
  }

  remove(key, title)
  {
    this.projectList.remove(key).then(() => {
      swal('Proyecto Eliminado.!',title, 'success');
      this.getProjects();
    }).catch((error) => {
      swal('Ocurrio un error.!', error.message, 'error');
    });
  }
}
