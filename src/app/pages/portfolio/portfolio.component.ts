import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireList } from 'angularfire2/database';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

// import swal from 'sweetalert';

declare var swal: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements DoCheck, OnInit
{
  public token : string;
  projectList : AngularFireList<Project>;
  projects: any;

  constructor(
    private projectService: ProjectService,
    private authService: AuthService) { }

  ngDoCheck() 
  {
    this.token = this.authService.getToken();
  }

  ngOnInit()
  {
    this.projectService.getProjects().subscribe(
      res => {
        this.projects = res;
      }
    );
  }

  delete(project)
  {
    swal({
      title: '¿Estás seguro?',
      text: 'Estás a punto de eliminar a ' + project.title,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
      if (borrar) 
      {
        this.projectService.remove(project.key, project.title);
      }
    });
  }
}
