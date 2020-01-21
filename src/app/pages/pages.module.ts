import { NgModule } from "@angular/core";
import { sharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";
import { BrowserModule } from '@angular/platform-browser'

import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        sharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        BrowserModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,

    ]
})
export class PagesModule { }
