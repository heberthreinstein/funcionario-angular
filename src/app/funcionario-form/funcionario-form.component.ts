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

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  save(funcionario: any){
    this.funcionarioService.saveFuncionario(funcionario).subscribe((res) => {
      console.log(res);
      this.funcionarioSaved.emit(funcionario)
    });
  }

  delete(id: number){
    this.funcionarioService.deleteFuncionario(id).subscribe((res) => {
      console.log(res);
      this.funcionarioSaved.emit({deleted: true})
    });
  }
}
