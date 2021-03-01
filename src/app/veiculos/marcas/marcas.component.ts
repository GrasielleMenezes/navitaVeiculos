import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Marcas } from '../veiculos.model';
import { VeiculosService } from '../veiculos.service';

@Component({
    selector: 'marcas',
    templateUrl: './marcas.component.html',
})
export class MarcasComponent implements OnInit{
    marcas:Marcas
    @Output() abreMarca = new EventEmitter<any>();
    constructor(private service:VeiculosService){}
    ngOnInit() {
        this.Obter();
    }
    abreMarcas(codigo) {
        this.abreMarca.emit(codigo);
    }
    Obter(){
        this.service.obterMarcas().subscribe(
            (resultado) => {
              this.marcas = new Marcas;
              this.marcas = resultado as Marcas;
            },
            (erro) => {
              console.log(erro);
            }
          );
    }
}