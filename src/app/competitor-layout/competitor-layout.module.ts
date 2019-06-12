import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompetitorLayoutComponent } from './competitor-layout.component';
import { HeaderModule } from '@app/shared/header/header.module';
import { FooterModule } from '@app/shared/footer/footer.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [ RouterModule, CommonModule, HeaderModule, FooterModule, SharedModule],
    declarations: [ CompetitorLayoutComponent ]
   
})

export class CompetitorLayoutModule {}
