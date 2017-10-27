import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalComponent } from '../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('componentInsideModal') componentInsideModal: ModalComponent;

  openFromComponent() {
    this.componentInsideModal.open();
  }
}
