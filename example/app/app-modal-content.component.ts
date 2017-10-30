import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: 'app-modal-content.component.html',
})
export class AppModalContentComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
    /* tslint:disable */
    console.info('AppModalContentComponent: created');
    /* tslint:enable */
  }

  ngOnDestroy() {
    /* tslint:disable */
    console.info('AppModalContentComponent: destroyed');
    /* tslint:enable */
  }
}
