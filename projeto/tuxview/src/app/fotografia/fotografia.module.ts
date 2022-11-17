import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FotoComponent } from "./foto/foto.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { InicioComponent } from "./inicio/inicio.component";




@NgModule({
    
    declarations: [
        FotoComponent,
        FormularioComponent,
        InicioComponent
    ],
    
    imports: [
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule 
    ],

   
    exports: [
        FotoComponent,
        FormularioComponent
    ]
   
})
export class FotografiaModule{}
