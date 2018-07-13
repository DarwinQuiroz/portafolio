import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import swal from 'sweetalert';

@Injectable()
export class AuthService 
{
  user: Observable<firebase.User>;
  token: string;

  constructor(
    public router: Router,
    private firebaseAuth: AngularFireAuth) 
  {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string) 
  {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.token = value.pa;
        localStorage.setItem('authToken', this.token);
        this.router.navigate(['/admin/projects']);
      })
      .catch(err => {
        swal('Credenciales incorrectas.!', 'El correo o la contraseña son incorrectos.', 'error');        
      });
  }

  logout()
  {
    this.firebaseAuth.auth.signOut();
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);
  }

  getToken()
  {
    const token = localStorage.getItem('authToken');
        
    if(token != 'undefined') this.token = token;
    else this.token = null;

    return this.token;
  }

  estaLogueado():boolean
  {
    return (this.token.length > 5) ? true : false;
  }
}
