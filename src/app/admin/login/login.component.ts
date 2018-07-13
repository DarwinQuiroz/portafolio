import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit 
{
  user: User;

  constructor(
    public router: Router,
    private authService: AuthService) 
    {
      this.user = new User('', '');
    }

  ngOnInit()
  {
    if(this.authService.getToken())
    {
      this.router.navigate(['/admin/projects']);
    }
  }


  login()
  {
    this.authService.login(this.user.email, this.user.password);
  }

  logout() 
  {
    this.authService.logout();
  }
}
