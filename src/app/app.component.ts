import { Component, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck
{
  public token: string;

  constructor(public authService: AuthService){}
  
  ngDoCheck()
  {
    this.token = this.authService.getToken();
  }
  title = 'app';
}
