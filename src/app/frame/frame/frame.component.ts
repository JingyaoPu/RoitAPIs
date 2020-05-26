import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit, OnDestroy {
  toggleNavSub: Subscription;
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SideNavComponent) nav: SideNavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.toggleNavSub = this.header.getToggleNav().subscribe(_ => this.nav.toggleNav());
  }

  ngOnDestroy(): void {
    this.toggleNavSub.unsubscribe();
  }
}
