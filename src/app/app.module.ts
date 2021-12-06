import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FondoComponent } from './componentes header/fondo/fondo.component';
import { IconosSuperiorComponent } from './componentes header/iconos-superior/iconos-superior.component';
import { CartelPortafolioComponent } from './componentes header/cartel-portafolio/cartel-portafolio.component';
import { SaberMasComponent } from './componentes header/saber-mas/saber-mas.component';
import { FlechaContinuarComponent } from './componentes header/flecha-continuar/flecha-continuar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImagenComponent } from './presentacion/imagen/imagen.component';
import { ExperienciaComponent } from './presentacion/experiencia/experiencia.component';
import { EducacionComponent } from './presentacion/educacion/educacion.component';
import { SoftSkillsComponent } from './presentacion/soft-skills/soft-skills.component';
import { HardSkillsComponent } from './presentacion/hard-skills/hard-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DescripcionesComponent } from './componentes-proyecto/descripciones/descripciones.component';
import { ContactameComponent } from './contactame/contactame.component';

@NgModule({
  declarations: [
    AppComponent,
    FondoComponent,
    IconosSuperiorComponent,
    CartelPortafolioComponent,
    SaberMasComponent,
    FlechaContinuarComponent,
    InicioComponent,
    AboutMeComponent,
    ImagenComponent,
    ExperienciaComponent,
    EducacionComponent,
    SoftSkillsComponent,
    HardSkillsComponent,
    ProyectosComponent,
    DescripcionesComponent,
    ContactameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
