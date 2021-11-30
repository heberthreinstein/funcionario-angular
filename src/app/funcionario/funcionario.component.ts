import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: any;
  novosFuncionarios: any = []
  formControl = new FormControl('');

  constructor(private funcionarioService: FuncionarioService) { }


  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.getAllFuncionarios();
  }

  novo(){
    this.novosFuncionarios.push({nome: "", sobrenome: "", email: "", pis: ""})
  }

  funcionarioSaved(funcionario: any){
    this.funcionarios = this.funcionarioService.getAllFuncionarios();
    if (!funcionario.deleted) {
      this.novosFuncionarios = this.novosFuncionarios.filter((obj: any) => obj !== funcionario);
    }
  }

}
