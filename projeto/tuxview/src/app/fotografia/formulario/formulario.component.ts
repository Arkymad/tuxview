import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* tradutor de http pra JSON */
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  nameButton = "Cadastrar";

  formulario!: FormGroup; 

   
  constructor(
    private formBuilder: FormBuilder, 
    private httpclient: HttpClient,
    ){ 
  }

  ngOnInit(): void {
    this.validaform()
  }
  validaform(){
    this.formulario = this.formBuilder.group({
      img: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['', ]
    });
  }

  /* JSON.stringify converte os dados para o formato JSON */
  cadastro(){
    this.httpclient.post('http://localhost:3000/fotos/', JSON.stringify(this.formulario.value), this.httpOptions).subscribe();
  }
}
