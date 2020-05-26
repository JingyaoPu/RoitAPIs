import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { tap, map, mergeMap, catchError, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  loaded: boolean = false;
  page$: Observable<any>;
  columnsToDisplay: string[];
  matPaginatorPara = new BehaviorSubject({
    pageIndex: 0,
    pageSize: 20,
  });
  matPaginatorPageSizeOptions = [20, 50, 100];

  @Input() data$: Observable<any[]>;
  @Input() loading$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    console.log("table onInit")
    this.data$.subscribe(ele => {
      if (ele.length > 0) {
        //console.log("data" + JSON.stringify(ele));
        this.columnsToDisplay = Object.keys(ele[0])
        this.loaded = true;
      }
    });

    this.page$ = this.matPaginatorPara.pipe(
      mergeMap(para =>
        this.data$.pipe(
          map(ele => 
            ele.slice(para.pageIndex * para.pageSize,
            para.pageSize + para.pageIndex * para.pageSize)
          )
        )
      ),
      catchError((err) => { console.log(err); return EMPTY })
    )
    



  }

  ngAfterViewInit(){
    this.paginator.page
          .pipe(
            tap(page => 
              this.matPaginatorPara.next({
              pageIndex: page.pageIndex,
              pageSize: page.pageSize
            })
            )
          ).subscribe();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  constructor() {

  }
}
