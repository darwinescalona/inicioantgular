import { Component,
          OnInit,
          OnChanges,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lista-paises',
  template: `
    <p>
      lista-paises works!
    </p>
  `,
  styles: []
})

// no es correcto con OnChanges y DoCheck en la misma
export class ListaPaisesComponent
implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

  constructor() { }

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
