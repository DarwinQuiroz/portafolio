import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';
import { APP_ROUTES } from './app.routing';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { PortfolioViewComponent } from './pages/portfolio/portfolio-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PortfolioViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES, AdminModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
