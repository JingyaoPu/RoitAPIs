import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  toggleNav$: Subject<null>;

  constructor() {
    this.toggleNav$ = new Subject();
  }
  ngOnInit() {

  }

  emitToggleNav(){
    this.toggleNav$.next(null);
  }

  getToggleNav(){
    return this.toggleNav$.asObservable();
  }

}
