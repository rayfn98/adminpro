import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [`
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  
  input[type=number] { -moz-appearance:textfield; }
  `]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(newValue: number){
    let input =  this.txtProgress;
    if (newValue >= 100) {
      this.progreso = 100;
    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso)
  }
  cambiarValor(valor) {
    if (this.progreso >= 100 && valor > 0) {
      return
    } else if (this.progreso <= 0 && valor < 0) {
      return
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
