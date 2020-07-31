import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

import  {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { ForDirective } from './directives/for.directive';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';

import {MatButtonModule} from '@angular/material/button';

import {MatSnackBarModule} from '@angular/material/snack-bar';



import {HttpClientModule} from '@angular/common/http/';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoRead2Component } from './components/evento/evento/evento-read2/evento-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { SalaCrudComponent } from './views/sala-crud/sala-crud.component';
import { SalaCreateComponent } from './components/sala/sala-create/sala-create.component';
registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EventoCrudComponent,
    ForDirective,
    EventoCreateComponent,
    EventoReadComponent,
    EventoRead2Component,
    EventoUpdateComponent,
    EventoDeleteComponent,
    SalaCrudComponent,
    SalaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {provide: LOCALE_ID,
    useValue: 'pt-BR'  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
