import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BadgeModule, GridModule, TableModule, ButtonModule, FormModule, ModalModule, CardModule } from '@coreui/angular';
//import { ChartjsModule } from '@coreui/angular-chartjs';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        GridModule,
        FormsModule,
        BadgeModule,
        TableModule,
        ComponentsModule,
        ButtonModule,
        FormModule,
        ModalModule,
        CardModule
    ]
})
export class CategoriesModule { }