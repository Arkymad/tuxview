import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "Cadastrar";

  formulario!: FormGroup; 

   
  constructor(private formBuilder: FormBuilder){ 

    this.formulario = formBuilder.group({
      img: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['', ]
    });

  }

  ngOnInit(): void {
  }

  
  cadastro(){
    alert("Cadastrado com sucesso");
    console.log(this.formulario.value);
  }
}
