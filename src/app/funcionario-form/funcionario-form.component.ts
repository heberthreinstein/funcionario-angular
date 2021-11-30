import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

  @Input() item: any;

  @Output() funcionarioSaved: EventEmitter<any> = new EventEmitter();

  error = false
  errorMessage = "";

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  save(funcionario: any){
    this.funcionarioService.saveFuncionario(funcionario).subscribe(
      () => this.funcionarioSaved.emit(funcionario),
      error => {
        this.errorMessage = error.error.message
        this.error = true
      });
  }

  delete(id: number){
    this.funcionarioService.deleteFuncionario(id).subscribe(
      () => this.funcionarioSaved.emit({deleted: true}),
      error => {
        this.errorMessage = error.error.message
        this.error = true
      });
  }

  closeError(){
    this.error = false;
  }
}
