import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { requestCacheInterceptorService } from './service/request-cache-interceptor.service';
import { TableComponent } from './table/table.component'
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [TableComponent],
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatGridListModule,
    CommonModule,
    TableComponent,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  providers:[{provide:HTTP_INTERCEPTORS, useClass:requestCacheInterceptorService, multi: true}]
})
export class SharedModule { }
