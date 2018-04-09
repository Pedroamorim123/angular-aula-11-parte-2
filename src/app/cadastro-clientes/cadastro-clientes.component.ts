import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})

export class CadastroClientesComponent implements OnInit {
  //importar o ReactiveFormsModule
  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    
    this.formGroup =  this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  
  }

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.formGroup.value);
  }
}
