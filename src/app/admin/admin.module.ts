import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ADMIN_ROUTES } from './admin.routing';
import { ProjectService } from '../services/project.service';
import { UploadService } from '../services/upload.service';

import { AdminComponent } from './admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditComponent } from './projects/edit.component';
import { environment } from '../../environments/environment';

// export const  firebaseConfig = {
//   apiKey: "AIzaSyBHi3txJ2W_7ZGy9HO87c08TFlEyDLoXh0",
//   authDomain: "portafolio-83ae5.firebaseapp.com",
//   databaseURL: "https://portafolio-83ae5.firebaseio.com",
//   storageBucket: "portafolio-83ae5.appspot.com",
//   messagingSenderId: "527318082957"
// };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ADMIN_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [AdminComponent, ProjectsComponent, EditComponent],
  providers: [ProjectService, UploadService]
})
export class AdminModule { }
