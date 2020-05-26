import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FrameComponent } from './frame/frame.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

// @ts-ignore
const routes: Routes = [
  // {path: '', component: FrameComponent},
  {path: 'LEAGUE-EXP-V4',
    loadChildren: () => import('../champion-mastery/champion-mastery.module').then(module => module.ChampionMasteryModule)}
];

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FrameComponent
  ],
  imports: [
    MatTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    MatTreeModule,
    MatIconModule,
    RouterModule,
    FrameComponent,
    MatToolbarModule,
    MatMenuModule,
    HeaderComponent,
    SideNavComponent,
  ]
})
export class FrameModule { }
