import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioViewComponent } from './pages/portfolio/portfolio-view.component';


const appRoutes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'view/:key', component: PortfolioViewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PortfolioComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
