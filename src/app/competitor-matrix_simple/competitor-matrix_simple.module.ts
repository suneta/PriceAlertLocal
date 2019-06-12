import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompetitorMatrixSimpleComponent } from './competitor-matrix_simple.component';
import { HeaderModule } from '@app/shared/header/header.module';
import { FooterModule } from '@app/shared/footer/footer.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [ RouterModule, CommonModule, HeaderModule, FooterModule, SharedModule],
    declarations: [ CompetitorMatrixSimpleComponent ]

})

export class CompetitorMatrixSimpleModule {}
