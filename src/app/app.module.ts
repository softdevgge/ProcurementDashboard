import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';

import { OfficeEngagementsChartComponent } from './charts/office-engagement-chart/office-engagement-chart.component';
import { TemplateEngagementCountChartComponent } from './charts/template-engagement-count-chart/template-engagement-count-chart.component';
import { TemplateEngagementAmountChartComponent } from './charts/template-engagement-amount-chart/template-engagement-amount-chart.component';
import { StatusContractYearChartComponent } from './charts/status-contract_year-chart/status-contract_year-chart.component';
import { EngagementsTableComponent } from './engagements-table/engagements-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MiniCardComponent } from './mini-card/mini-card.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    OfficeEngagementsChartComponent,
    TemplateEngagementCountChartComponent,
    TemplateEngagementAmountChartComponent,
  StatusContractYearChartComponent,
  EngagementsTableComponent,
  MiniCardComponent,
  AboutComponent

  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
