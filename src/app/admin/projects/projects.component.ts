import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import swal from 'sweetalert';

import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit 
{
  project: Project;

  constructor(
    public upload: UploadService,
    public ps: ProjectService) 
  { 
    this.project = new Project();
  }

  ngOnInit() 
  { 
    this.ps.project = new Project(); 
  }

  save(form: NgForm)
  {
    this.upload.uploadImage(this.filesToUpload[0], form.value);
    // this.ps.insert(form.value);
    form.reset();
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) 
  {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}
