import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [FooterComponent ],
    exports: [FooterComponent ]
})

export class FooterModule {}
