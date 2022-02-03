import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedpluginComponent } from './fixedplugin/fixedplugin.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgChartsModule } from 'ng2-charts';
import { LoaderComponent } from './loader/loader.component';
import { ArrowbackComponent } from './arrowback/arrowback.component';



@NgModule({
  declarations: [
    FixedpluginComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    BreadcrumbComponent,
    LoaderComponent,
    ArrowbackComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgChartsModule,
  ],
  exports: [
    FixedpluginComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    BreadcrumbComponent,
    ArrowbackComponent,
    NgbModule,
    CommonModule,
    FormsModule,
    NgChartsModule,
    LoaderComponent
  ]
})
export class SharedModule { }
