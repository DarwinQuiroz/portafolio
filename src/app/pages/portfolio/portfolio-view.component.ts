import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styles: []
})
export class PortfolioViewComponent implements OnInit 
{
  project = null;
  constructor(public ps: ProjectService, public route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.viewDetail();
  }

  viewDetail()
  {
    this.route.params.subscribe(params => {
      const key = params['key'];
      
      this.ps.getProject(key).subscribe(res => {
        this.project = res[0];
      });
    })
  }
}
