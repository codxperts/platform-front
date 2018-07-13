import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Page } from '../../models/page';


interface ActivePage {
  page?: number;
  text?: string;
  active: boolean;
  icon?: string;
}

@Component({
  selector: 'rbo-pagination',
  template: `<div style="margin-top:16px;margin-bottom:16px;" class="mat-paginator" layout="row" layout-align="end center">
  <div class="mat-paginator-containera">
    <div class="mat-paginator-range-actions">
    <span class="mat-paginator-page-size-label">Showing {{from}}-{{to}} of {{total}}</span>
      <button mat-icon-button
              [routerLink]="[target, page.page]"
              *ngFor="let page of pages"
              [color]="page.active ? 'primary' :'' "
              [disabled]="!page.page"
              [class.arrow]="page.icon">
        <span *ngIf="!page.icon">{{page.page || page.text}}</span>
        <mat-icon *ngIf="page.icon"
                  small="true">{{page.icon}}
        </mat-icon>
      </button>
    </div>
  </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input()
  target: string; //Base path where the pagination will redirect to 
  pages: ReadonlyArray<ActivePage>;
  from: number;
  to: number;
  total: number;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set page(page: Page) {
    console.log(page);
    const first = 1;
    const last = page.totalPages;
    const activePage = page.number;

    this.from = page.from;
    this.to = page.to;
    this.total = page.totalElements;

    this.pages = [
      {
        icon: 'keyboard_arrow_left',
        page: activePage === 1 ? null : activePage,
        active: false
      }
    ];
    let pageNumbers: ReadonlyArray<number> = [];
    for (let i = 1; i <= page.totalPages; i++) { 
      // Limit the number of pages
      if (i === first || i === last || activePage === i
        || last < 5
        || activePage - 1 === i || (activePage < 3 && i < 4)
        || activePage + 1 === i || (activePage > last - 2 && i > last - 3)
      ) {
        pageNumbers = [ ...pageNumbers, i ];
      }
    }

    //Transform the pages to a nice output format
    this.pages = pageNumbers.reduce((result: ReadonlyArray<ActivePage>, nextPageNumber: number) => {
      const lastPage = result[ result.length - 1 ].page;
      if (lastPage && lastPage + 1 < nextPageNumber) {
        result = [
          ...result, {
            text: '...',
            active: false,
          }
        ];
      }
      return [
        ...result, {
          page: nextPageNumber,
          active: activePage === nextPageNumber
        }
      ];
    }, this.pages);

    this.pages = [
      ...this.pages, {
        icon: 'keyboard_arrow_right',
        page: activePage === last ? null : activePage + 2,
        active: false
      }
    ];
  }

}