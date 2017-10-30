# Angular Custom Modal

> Angular2+ Modal / Dialog (with inner component support).

A continuation of https://stackoverflow.com/a/46949848

## Install

```
npm install angular-custom-modal
```

## Features

- Light: no CSS / JS frameworks attached
- Bootstrap CSS compatible
- Custom modal header, body and header
- Modal stacking support
- Lazy inner component initialization, and ngOnDestroy(ed) when modal is closed
- Parent scrolling disabled when modal is visible

## Usage

app.module.ts

```
imports: [
  ...
  ModalModule,
  ...
],
...
})
```

### Raw HTML

app.component.html

```
<button (click)="htmlInsideModal.open()">Raw HTML inside modal</button>
<modal #htmlInsideModal>
  <ng-template #modalHeader><h2>HTML inside modal</h2></ng-template>
  <ng-template #modalBody>
    <p>HTML content inside modal</p>
  </ng-template>
</modal>
```

### Component inside Modal

my-component.component.ts

```
@Component({
  selector: 'app-my-component',
  templateUrl: 'my-component.component.html',
})
export class AppModalContentComponent { }
```

my-component.component.html

```
<p>My component's HTML</p>
```

app.component.html

```
<button (click)="componentInsideModal.open()">Component inside modal</button>
<modal #componentInsideModal>
  <ng-template #modalHeader><h2>Component inside modal</h2></ng-template>
  <ng-template #modalBody>
    <app-my-component></app-my-component>
  </ng-template>
  <ng-template #modalFooter></ng-template>
</modal>
```

See [example source code](https://github.com/zurfyx/angular-custom-modal/tree/master/example/app) for more information.

**Why ng-template?**

ng-template prevents the parent component from initializing the component. Only when the modal library finds it convenient the component will be initialize and visible to the user. Hence, it preserves the natural `ngOnInit()` and `ngOnDestroy()` that we expect.

Similar libraries which make use of `<ng-content>` and its [content transclution strategy](https://scotch.io/tutorials/angular-2-transclusion-using-ng-content#toc-multi-slot-transclusion), do not prevent the component from initializing, but rather just hide it. The component was already initialized in the parent component.

References:<br>
https://angular.io/api/common/NgTemplateOutlet<br>
https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/<br>
https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b<br>
https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e<br>

# TODO

- [ ] Modal header/body/footer as a component or directive (not sure if feasable)
- [ ] Optional styles
- [ ] Optional scrolling when modal is active
- [ ] Optional visibility

## Special thanks

To [Stephen Paul](https://stackoverflow.com/users/1087131/stephen-paul) for the [initial Angular 2 Modal version](https://stackoverflow.com/a/40144809/2013580).

## License

MIT © [Gerard Rovira Sánchez](//zurfyx.com)