import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pepe';

import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { BuscarTareaComponent } from './components/buscar-tarea/buscar-tarea.component';
import { HeaderComponent } from './components/header/header.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    NuevaTareaComponent,
    BuscarTareaComponent,
    FilterPipe,
    HeaderComponent,
    ProtegidaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-kn51ntet.us.auth0.com',
      clientId: 'xwwxgefqJToOyV3Ul8SRF81uvvmNzSMq',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
