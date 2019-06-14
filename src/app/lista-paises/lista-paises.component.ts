import { Component,
          // lifecycle
          OnInit,
          OnChanges,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          // input/output
          Input, Output, EventEmitter
        } from '@angular/core';

@Component({
  selector: 'app-lista-paises',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          PAIS: El código de área es: {{codigoArea}}
        </h5>
        <p class="card-text">Mensaje Input:<strong>{{mensajeInput}}</strong></p>
        <label>Ingrese texto: </label>
        <input type="text" [(ngModel)]="codigoArea" class="form-control">
        <button (click)="onPropagar()" class="btn btn-primary">Enviar Valor</button>
        <br>
        <br>
        <br>
        <h4>{{ pib | currency }}</h4>
        <br>
        <br>
        <p>Fecha de cumpleaños {{ birthday | date:format }}</p>
        <button (click)="toggleFormat()" class="btn btn-primary">Toggle Format</button>
      </div>
    </div>
  `,
  styles: []
})

// no es correcto con OnChanges y DoCheck en la misma
export class ListaPaisesComponent
implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() { }

  public codigoArea: string;
  public pib = 299000000000;
  birthday = new Date(1981, 3, 15); // April 15, 1981
  toggle = true; // start with true == shortDate

  @Input()
  mensajeInput: string;

  @Output()
  public propagar = new EventEmitter<string>();

  onPropagar() {
    console.log(this.codigoArea);
    this.propagar.emit(this.codigoArea);
  }



  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }
/*
  ngDoCheck() {
    console.log('DoCheck');
  }
*/
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
