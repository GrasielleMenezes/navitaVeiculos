import { Component, Input, NgModuleFactoryLoader, OnInit } from '@angular/core';

@Component({
  selector: 'veiculos',
  templateUrl: './veiculos.component.html',
})
export class VeiculosComponent implements OnInit{

    codigoMarca:any;
    constructor(){}
    ngOnInit() {
        
    }
    liberaMarca(evento){
    this.codigoMarca  = null
    this.codigoMarca = evento;
    
    }
}