import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { PageComponent } from './product-page/page/page.component';
import { AdminLayoutComponent } from  './admin-layout/admin-layout.component';
import { HomeLayoutComponent } from  './home-layout/home-layout.component';
import { CompetitorLayoutComponent } from  './competitor-layout/competitor-layout.component';
import { CompetitorMatrixComponent } from  './competitor-matrix/competitor-matrix.component';
import { WebsiteLayoutComponent } from  './website-layout/website-layout.component';
import { CompetitorIndexComponent } from  './competitor-index/competitor-index.component';
import { CompetitorMatrixSimpleComponent } from  './competitor-matrix_simple/competitor-matrix_simple.component';
import { AlertLayoutComponent } from  './alert-layout/alert-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'anms.menu.settings' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'product',
    component: PageComponent
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'oldtab',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'competitor',
    component: CompetitorLayoutComponent,
  },
  {
    path: 'competitor-matrix',
    component: CompetitorMatrixComponent,
  },
  {
    path: 'competitor-index',
    component: CompetitorIndexComponent,
  },
  {
    path: 'competitor-matrix_simple',
    component: CompetitorMatrixSimpleComponent,
  },
  {
    path: 'website-layout',
    component: WebsiteLayoutComponent,
  },
  {
    path: 'alert',
    component: AlertLayoutComponent,
  },
  {
    path: '**',
    redirectTo: 'product'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
