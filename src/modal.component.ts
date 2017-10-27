/* tslint:disable:component-selector */

import { Component, OnDestroy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  @ContentChild('modalHeader') header: TemplateRef<any>;
  @ContentChild('modalBody') body: TemplateRef<any>;
  @ContentChild('modalFooter') footer: TemplateRef<any>;

  public visible = false;
  public visibleAnimate = false;

  ngOnDestroy() {
    // Prevent modal from not executing its closing actions if the user navigated away (for example,
    // through a link).
    this.close();
  }

  open(): void {
    document.body.style.overflow = 'hidden';

    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 200);
  }

  close(): void {
    document.body.style.overflow = 'auto';

    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 100);
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.close();
    }
  }
}
