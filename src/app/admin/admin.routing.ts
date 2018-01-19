import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditComponent } from './projects/edit.component';

import { AuthGuard } from '../services/auth.guard';

const pagesRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'projects/:key/edit', component: EditComponent },
            { path: 'projects', component: ProjectsComponent },
        ]
    },
];
export const ADMIN_ROUTES = RouterModule.forChild(pagesRoutes);
