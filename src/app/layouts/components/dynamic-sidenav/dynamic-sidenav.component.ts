import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { Component, OnDestroy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dynamic-sidenav',
  templateUrl: './dynamic-sidenav.component.html',
  styleUrls: ['./dynamic-sidenav.component.scss']
})
export class DynamicSidenavComponent implements OnDestroy {
  /**
   * Import material sidenav so we can access open close functions.
   */
  @Input() sidenav: MatSidenav;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
      )
      .subscribe((event: RouterEvent) => {
        if (this.sidenav && this.sidenav.mode === 'over' && this.sidenav.opened) {
          this.sidenav.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

