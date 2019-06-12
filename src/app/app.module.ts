import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { SettingsModule } from './settings';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { RouterModule } from '@angular/router';
import { BaseService } from '@app/services/baseservice';
import { AlertLayoutModule } from './alert-layout/alert-layout.module';
import { ProductPageModule } from './product-page/product-page.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { HomeLayoutModule } from './home-layout/home-layout.module';
import { CompetitorLayoutModule } from './competitor-layout/competitor-layout.module';
import { CompetitorMatrixModule } from './competitor-matrix/competitor-matrix.module';
import { CompetitorIndexModule } from './competitor-index/competitor-index.module';
import { CompetitorMatrixSimpleModule } from './competitor-matrix_simple/competitor-matrix_simple.module';
import {WebsiteLayoutModule} from './website-layout/website-layout.module.ts'


@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    SettingsModule,
    ProductPageModule,
    AdminLayoutModule,
    HomeLayoutModule,
    CompetitorLayoutModule,
    CompetitorMatrixModule,
    CompetitorIndexModule,
    CompetitorMatrixSimpleModule,
    WebsiteLayoutModule,
    AlertLayoutModule,
    HeaderModule,
    FooterModule,

    // app
    AppRoutingModule,
  ],
  declarations: [AppComponent, AuthCallbackComponent],
  providers: [AuthGuardService, AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}, BaseService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
