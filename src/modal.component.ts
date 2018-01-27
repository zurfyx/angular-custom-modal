/* tslint:disable:component-selector */

import {
  Component,
  OnDestroy,
  ContentChild,
  ElementRef,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnDestroy {
  @ContentChild('modalHeader') header: TemplateRef<any>;
  @ContentChild('modalBody') body: TemplateRef<any>;
  @ContentChild('modalFooter') footer: TemplateRef<any>;

  visible = false;
  visibleAnimate = false;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

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
      this.changeDetectorRef.markForCheck();
    }, 200);
    this.changeDetectorRef.markForCheck();
  }

  close(): void {
    document.body.classList.remove('modal-open');

    this.visible = false;
    setTimeout(() => {
      this.visibleAnimate = false;
      this.changeDetectorRef.markForCheck();
    }, 100);
    this.changeDetectorRef.markForCheck();
  }

  @HostListener('click', ['$event'])
  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    // If ESC key and TOP MOST modal, close it.
    if (event.key === 'Escape' && !this.elementRef.nativeElement.querySelector(':scope modal > .modal')) {
      this.close();
    }
  }
}
