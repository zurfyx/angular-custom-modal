/* tslint:disable:component-selector */

import { Component, OnDestroy, ContentChild, TemplateRef, Input, HostListener } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  @Input() customCloseButtonTemplate: TemplateRef<any>;

  @ContentChild('modalHeader') header: TemplateRef<any>;
  @ContentChild('modalBody') body: TemplateRef<any>;
  @ContentChild('modalFooter') footer: TemplateRef<any>;

  public visible = false;

  ngOnDestroy() {
    // Prevent modal from not executing its closing actions if the user navigated away (for example,
    // through a link).
    this.close();
  }

  open(): void {
    document.body.style.overflow = 'hidden';

    this.visible = true;
  }

  close(): void {
    document.body.style.overflow = 'auto';

    this.visible = false;
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}
