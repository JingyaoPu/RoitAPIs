import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {reducer} from './store/champion-mastery.reducer';
import {Effects} from './store/champion-mastery.effects';
import { HeroListComponent } from './hero-list/hero-list.component';
import { RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ChampionMasteryResolverService } from './services/champion-mastery-resolver.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroListComponent,
        resolve: {
          data: ChampionMasteryResolverService
        }
      }
    ]),
    StoreModule.forFeature('ChampionMastery', reducer),
    EffectsModule.forRoot([Effects]),
  ],
})
export class ChampionMasteryModule { }
