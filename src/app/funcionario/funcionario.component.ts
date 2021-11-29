import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: any;

  constructor(private funcionarioService: FuncionarioService) { }


  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.getAllFuncionarios();
  }

  showInfo(id:number){

  }

}
