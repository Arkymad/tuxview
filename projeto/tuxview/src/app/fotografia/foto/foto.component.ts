import { Component } from "@angular/core";

import { Fotos } from './foto';
import { DatabaseService } from '../../service/database.service';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{

  nameButton = "Fotos Pares";
  titulo = "Minhas Fotos";
  control = true;
  
  
  imagens: Fotos[] = [];

 
  
  constructor(private database: DatabaseService){}

  ngOnInit(){
    this.database.getFoto().subscribe(caixa => this.imagens = caixa);
  }

  
  deletar(id:number){
   
  }

  mudar(){}
}