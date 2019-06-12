import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [ RouterModule, CommonModule , SharedModule],
    declarations: [HeaderComponent] ,
    exports: [HeaderComponent]
})

export class HeaderModule {}
