import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './projects.component.html',
  styles: []
})
export class EditComponent implements OnInit 
{
  public key;

  constructor(public ps: ProjectService, public route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.getProjeject()
  }

  getProjeject()
  {
    this.route.params.subscribe(params => {
      this.key = params['key'];
      this.ps.getProject(this.key).subscribe(res => {

        this.ps.project = res[0];
      });
    })
  }

  save(form: NgForm)
  {
    this.ps.update(this.key, form.value);
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) 
  {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
