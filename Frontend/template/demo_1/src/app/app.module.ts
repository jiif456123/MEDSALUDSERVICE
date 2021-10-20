import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterPipe } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SettingsPanelComponent } from './shared/settings-panel/settings-panel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
 //Pa que funcione la ruta :v 
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitaVirtualComponent } from './domicilio/citaVirtual/citaVirtual.component';
import { VirtualRoomComponent } from './domicilio/virtualRoom/virtualRoom.component';

import { GestionarCitasComponent } from './citas/gestionar-citas/gestionar-citas.component';

import { GestionarHistoriaComponent } from './citas/gestionar-Historia Clinica/gestionar-historia.component'; 

// AoT requires an exported function for factories

//citaVirtual
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {withCredentials: '*'}};

//import { BrowserModule  } from '@angular/platform-browser';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsPanelComponent,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
     //Pa que funcione la ruta :v 
    DashboardComponent,
    CitaVirtualComponent,
    VirtualRoomComponent,
    GestionarCitasComponent,
    GestionarHistoriaComponent
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SocketIoModule.forRoot(config),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
