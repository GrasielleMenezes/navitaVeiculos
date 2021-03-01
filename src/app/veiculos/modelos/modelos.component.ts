import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Modelos } from '../veiculos.model';
import { VeiculosService } from '../veiculos.service';

@Component({
    selector: 'modelos',
    templateUrl: './modelos.component.html',
})
export class ModelosComponent implements OnInit, OnChanges {

    modelos: Modelos;
    @Input() codigoMarca;
    
    constructor(private service: VeiculosService) { }
    ngOnInit() {

    }
    ngOnChanges() {
        if (this.codigoMarca != undefined) {
            this.Obter(this.codigoMarca);
        }
    }
    Obter(codigo) {
        this.service.obterModelos(codigo).subscribe(
            (resultado) => {
                this.modelos = new Modelos;
                this.modelos = resultado.modelos as Modelos;
            },
            (erro) => {
                console.log(erro);
            }
        );
    }

}
