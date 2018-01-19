import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from './project.service';


import * as firebase from 'firebase';

@Injectable()
export class UploadService 
{
  private basePath: string = '/portfolio';
  private uploadTask: firebase.storage.UploadTask;

  constructor(public ps: ProjectService) { }

  uploadImage(image: File, project: Project)
  {
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${image.name}`).put(image);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      
    }, 
    error => {
      console.log('Error', error);
    }, () => {
      project.image = this.uploadTask.snapshot.downloadURL;
      this.ps.insert(project);
    })
  }
}
