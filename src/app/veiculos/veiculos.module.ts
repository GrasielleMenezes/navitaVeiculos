import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MarcasComponent } from "./marcas/marcas.component";
import { ModelosComponent } from "./modelos/modelos.component";
import { VeiculosComponent } from "./veiculos.component";
import { VeiculosService } from "./veiculos.service";


@NgModule({
  declarations: [
    VeiculosComponent, ModelosComponent, MarcasComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports:[VeiculosComponent, ModelosComponent, MarcasComponent],
  providers: [VeiculosService],
  bootstrap: [VeiculosComponent, ModelosComponent, MarcasComponent]
})
export class VeiculosModule { }
