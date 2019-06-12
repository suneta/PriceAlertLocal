import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompetitorMatrixComponent } from './competitor-matrix.component';
import { HeaderModule } from '@app/shared/header/header.module';
import { FooterModule } from '@app/shared/footer/footer.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [ RouterModule, CommonModule, HeaderModule, FooterModule, SharedModule],
    declarations: [ CompetitorMatrixComponent ]
   
})

export class CompetitorMatrixModule {}
