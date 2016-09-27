import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatusComponent } from './components/navbar/status/status.component';
import { HistoryComponent } from './components/navbar/history/history.component';
import { DocumentationComponent } from './components/navbar/documentation/documentation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './sites/dashboard/dashboard.component';
import { ColumnchartComponent } from './components/datavisualisation/columnchart/columnchart.component';
import { GaugeComponent } from './components/datavisualisation/gauge/gauge.component';
import { LinechartComponent } from './components/datavisualisation/linechart/linechart.component';
import { BarchartComponent } from './components/datavisualisation/barchart/barchart.component';
import { DatagridComponent } from './components/datavisualisation/datagrid/datagrid.component';
import {routing} from './routing.module';
import {PageNotFoundComponent} from './sites/pagenotfound/pageNotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusComponent,
    HistoryComponent,
    DocumentationComponent,
    SidebarComponent,
    DashboardComponent,
   ColumnchartComponent,
    GaugeComponent,
    LinechartComponent,
    BarchartComponent,
    DatagridComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
