import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {

/**
   * Stores if left sidenav is open.
   */
  leftSidenavOpen: boolean;

  /**
   * Stores left sidenav display mode.
   */
  leftSidenavMode: string;

  /**
   * Stores media observable subscription.
   */
  mediaSubscription: Subscription;

  constructor(
    private media: ObservableMedia,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    // Get initial state of the sidenav.
    this.calculateSidenavStatus();

    // Subscribe to changes in screen size to change sidenav behavior.
    this.mediaSubscription = this.media
      .subscribe((change: MediaChange) => this.calculateSidenavStatus());
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }

  calculateSidenavStatus(): void {
    const isMobile = this.media.isActive('lt-md');
    // Close sidenav on mobile.
    this.leftSidenavOpen = !isMobile;
    // Make sidenav open over content on mobile.
    this.leftSidenavMode = isMobile ? 'over' : 'side';
  }
}
