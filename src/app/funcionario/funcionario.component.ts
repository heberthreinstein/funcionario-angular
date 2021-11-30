import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
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

  success = false;
  successMessage = ""


  constructor(private funcionarioService: FuncionarioService) { }


  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.getAllFuncionarios()
  }

  novo(){
    this.novosFuncionarios.push({nome: "", sobrenome: "", email: "", pis: ""})
  }

  funcionarioSaved(funcionario: any){
    this.funcionarios = this.funcionarioService.getAllFuncionarios();
    this.success = true
    if (!funcionario.deleted) {
      this.successMessage = "Funcionario " + funcionario.nome +" salvo com sucesso!"
      this.novosFuncionarios = this.novosFuncionarios.filter((obj: any) => obj !== funcionario);
    } else {
      this.successMessage = "Funcionario deletado com sucesso!"
    }
  }

  closeSuccess(){
    this.success = false;
  }
}
