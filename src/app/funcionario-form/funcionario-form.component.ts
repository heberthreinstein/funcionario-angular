import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
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
  dialog: NbDialogRef<any> | undefined;


  constructor(private funcionarioService: FuncionarioService, private dialogService: NbDialogService) { }

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

  deletar(id: number){
    if (this.dialog != undefined) {
      this.dialog.close();
    }
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

  deleteDialog(dialog: TemplateRef<any>, funcionario: any){
    this.dialog = this.dialogService.open(dialog, { context: "Você tem certeza que deseja deletar o fucnionario " + funcionario.nome + " " + funcionario.sobrenome });
  }
}
