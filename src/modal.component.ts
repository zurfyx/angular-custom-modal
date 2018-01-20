/* tslint:disable:component-selector */

import {
  Component,
  OnDestroy,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnDestroy {
  @ContentChild('modalHeader') header: TemplateRef<any>;
  @ContentChild('modalBody') body: TemplateRef<any>;
  @ContentChild('modalFooter') footer: TemplateRef<any>;

  public visible = false;
  private visibleAnimate = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnDestroy() {
    // Prevent modal from not executing its closing actions if the user navigated away (for example,
    // through a link).
    this.close();
  }

  open(): void {
    document.body.classList.add('modal-open');

    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true;
      this.cd.markForCheck();
    }, 200);
    this.cd.markForCheck();
  }

  close(): void {
    document.body.classList.remove('modal-open');

    this.visible = false;
    setTimeout(() => {
      this.visibleAnimate = false;
      this.cd.markForCheck();
    }, 100);
    this.cd.markForCheck();
  }

  @HostListener('click', ['$event'])
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
