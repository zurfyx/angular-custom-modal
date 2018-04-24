webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../example/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../example/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app-modal-content.component.html":
/***/ (function(module, exports) {

module.exports = "I'm &lt;app-modal-content&gt; and it's only the &lt;modal&gt; who brought me to live. This component\nwill get destroyed when the modal is closed.\n\n<pre>\n  <code>\n&lt;button (click)=&quot;componentInsideModal.open()&quot;&gt;Component inside modal&lt;/button&gt;\n&lt;modal #componentInsideModal&gt;\n  &lt;ng-template #modalHeader&gt;&lt;h2&gt;Component inside modal&lt;/h2&gt;&lt;/ng-template&gt;\n  &lt;ng-template #modalBody&gt;\n    &lt;app-modal-content&gt;&lt;/app-modal-content&gt;\n  &lt;/ng-template&gt;\n  &lt;ng-template #modalFooter&gt;&lt;/ng-template&gt;\n&lt;/modal&gt;\n  </code>\n</pre>"

/***/ }),

/***/ "../../../../../example/app/app-modal-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModalContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppModalContentComponent = (function () {
    function AppModalContentComponent() {
    }
    AppModalContentComponent.prototype.ngOnInit = function () {
        /* tslint:disable */
        console.info('AppModalContentComponent: created');
        /* tslint:enable */
    };
    AppModalContentComponent.prototype.ngOnDestroy = function () {
        /* tslint:disable */
        console.info('AppModalContentComponent: destroyed');
        /* tslint:enable */
    };
    return AppModalContentComponent;
}());
AppModalContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-modal-content',
        template: __webpack_require__("../../../../../example/app/app-modal-content.component.html"),
    }),
    __metadata("design:paramtypes", [])
], AppModalContentComponent);

//# sourceMappingURL=app-modal-content.component.js.map

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <h1>&lt;angular-custom-modal&gt;</h1>\n\n  <div class=\"reader\">\n    <a class=\"switch neat\" href=\"javascript:void(0)\" (click)=\"toggleCssInjector()\">\n      <span class=\"bubble\" [class.fill]=\"modalCss === 0\"></span> Bootstrap\n    </a>\n\n    <div id=\"actions\">\n      <button class=\"big\" (click)=\"componentInsideModal.open()\">Component inside modal</button>\n      <!-- Alternatively we can define the open call on the component\n        <button class=\"big\" (click)=\"openFromComponent()\"></button> -->\n      <button class=\"big\" (click)=\"htmlInsideModal.open()\">Raw HTML inside modal</button>\n      <button class=\"big\" (click)=\"nestedModal.open()\">Modal with nested modal</button>\n      <button class=\"hidden\" (click)=\"ignoreClickOutside.open()\">Prevent modal to be dismissed when clicking outside it</button>\n\n      <!-- Example 1: Component Inside Modal -->\n      <modal #componentInsideModal>\n        <ng-template #modalHeader><h2>Component inside modal</h2></ng-template>\n        <ng-template #modalBody>\n          <app-modal-content></app-modal-content>\n        </ng-template>\n        <ng-template #modalFooter></ng-template>\n      </modal>\n\n      <!-- Example 2: HTML Inside Modal -->\n      <modal #htmlInsideModal>\n        <ng-template #modalHeader><h2>HTML inside modal</h2></ng-template>\n        <ng-template #modalBody>\n          I'm HTML who's living on the &lt;app.component.html&gt;\n          <pre>\n            <code>\n  &lt;button class=&quot;big&quot; (click)=&quot;htmlInsideModal.open()&quot;&gt;Raw HTML inside modal&lt;/button&gt;\n  &lt;modal #htmlInsideModal&gt;\n  &lt;ng-template #modalHeader&gt;&lt;h2&gt;Component inside modal&lt;/h2&gt;&lt;/ng-template&gt;\n  &lt;ng-template #modalBody&gt;\n    I'm HTML who's living on the &lt;app.component.html&gt;\n    ...\n  &lt;/ng-template&gt;\n  &lt;/modal&gt;\n            </code>\n          </pre>\n        </ng-template>\n      </modal>\n\n      <!-- Example 3: Nested Modal -->\n      <modal #nestedModal>\n        <ng-template #modalHeader><h2>Nested modal</h2></ng-template>\n        <ng-template #modalBody>\n          Nested modals can be created by simply adding a &lt;modal&gt; inside a &lt;modal&gt;\n          <pre>\n            <code>\n&lt;button class=&quot;big&quot; (click)=&quot;nestedModal.open()&quot;&gt;Modal with nested modal&lt;/button&gt;\n&lt;modal #nestedModal&gt;\n  &lt;ng-template #modalHeader&gt;&lt;h2&gt;Nested modal&lt;/h2&gt;&lt;/ng-template&gt;\n  &lt;ng-template #modalBody&gt;\n    Nested modals can be created by simply adding a &lt;modal&gt; inside a &lt;modal&gt;\n    ...\n    &lt;button (click)=&quot;nestedModalX.open()&quot;&gt;Open nested modal&lt;/button&gt;\n    &lt;modal #nestedModalX&gt;\n      &lt;ng-template #modalBody&gt;This is the nested modal content.&lt;/ng-template&gt;\n    &lt;/modal&gt;\n  &lt;/ng-template&gt;\n&lt;/modal&gt;\n            </code>\n          </pre>\n          <button (click)=\"nestedModalX.open()\">Open nested modal</button>\n          <modal #nestedModalX>\n            <ng-template #modalBody>This is the nested modal content.</ng-template>\n          </modal>\n        </ng-template>\n      </modal>\n\n      <!--- Example 4: Prevent modal to be dismissed when clicking outside it -->\n      <modal #ignoreClickOutside [closeOnOutsideClick]=\"false\"></modal>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans);", ""]);

// module
exports.push([module.i, "html, body {\n  color: #444;\n  font-family: 'Open Sans', sans-serif;\n  background: #4aabc9;\n  background: linear-gradient(135deg, #4aabc9 0%, #7db9e8 100%);\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\nbutton {\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  transition: .2s all; }\n  button:focus {\n    outline: none; }\n\nbutton.big {\n  color: #444;\n  padding: 2rem 4rem;\n  border: 0;\n  border-radius: 4px;\n  background-color: #fff; }\n  button.big:hover {\n    background-color: #e4e4e4; }\n\nbutton.hidden {\n  display: none; }\n\nh1, h2 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 200; }\n\nh1 {\n  color: #fff;\n  padding: 30px;\n  margin: 0; }\n\na.neat {\n  color: inherit;\n  text-decoration: none; }\n\n.bubble {\n  display: inline-block;\n  width: 0.5em;\n  height: 0.5em;\n  border: 2px solid #fff;\n  border-radius: 0.8em; }\n  .bubble.fill {\n    background-color: #fff; }\n\n.reader {\n  margin: 0 auto;\n  max-width: 600px;\n  margin-top: 10%; }\n\na.switch {\n  display: block;\n  margin-left: auto;\n  margin-right: 0;\n  text-align: right;\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #fff; }\n\n#content {\n  height: 100%; }\n\n#actions {\n  margin-top: 2rem;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (50%)[2];\n      grid-template-columns: repeat(2, 50%);\n  grid-gap: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MODAL_CSS = [
    'assets/modal.css',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
];
var AppComponent = (function () {
    function AppComponent() {
        this.modalCss = 0; // @See toggleCssInjector()
    }
    AppComponent.prototype.ngOnInit = function () {
        this.toggleCssInjector();
    };
    AppComponent.prototype.openFromComponent = function () {
        this.componentInsideModal.open();
    };
    // ToggleCssInjector is just for the sake of the demo, switching between custom and Boostrap
    // styles. In your web app you should rather choose one or the other.
    // Web styles reside in ./modal.css
    // Alternatively you can pick Boostrap
    AppComponent.prototype.toggleCssInjector = function () {
        var prev = document.getElementById('injected');
        if (prev) {
            prev.parentNode.removeChild(prev);
        }
        var head = document.head;
        var link = document.createElement('link');
        link.id = 'injected';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = MODAL_CSS[this.modalCss];
        head.appendChild(link);
        this.modalCss = (this.modalCss + 1) % MODAL_CSS.length;
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('componentInsideModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__src__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__src__["a" /* ModalComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "componentInsideModal", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../example/app/app.component.html"),
        styles: [__webpack_require__("../../../../../example/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_modal_content_component__ = __webpack_require__("../../../../../example/app/app-modal-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__src__["b" /* ModalModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_modal_content_component__["a" /* AppModalContentComponent */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_component__ = __webpack_require__("../../../../../src/modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_module__ = __webpack_require__("../../../../../src/modal.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__modal_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"modal fade\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n  [class.in]=\"visibleAnimate\"\n  *ngIf=\"visible\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n        <button class=\"close\" data-dismiss=\"modal\" type=\"button\" aria-label=\"Close\" (click)=\"close()\">×</button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * A more specific selector overwrites bootstrap display properties, but they still enable users\n * to overwite them on their apps.\n */\n/deep/ modal .modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n/deep/ .modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  background-color: rgba(0, 0, 0, 0.15);\n  z-index: 42; }\n\n/deep/ .modal.in {\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* tslint:disable:component-selector */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent(elementRef, changeDetectorRef) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.closeOnOutsideClick = true;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.ngOnDestroy = function () {
        // Prevent modal from not executing its closing actions if the user navigated away (for example,
        // through a link).
        this.close();
    };
    ModalComponent.prototype.open = function () {
        var _this = this;
        document.body.classList.add('modal-open');
        this.visible = true;
        setTimeout(function () {
            _this.visibleAnimate = true;
        });
    };
    ModalComponent.prototype.close = function () {
        var _this = this;
        document.body.classList.remove('modal-open');
        this.visibleAnimate = false;
        setTimeout(function () {
            _this.visible = false;
            _this.changeDetectorRef.markForCheck();
        }, 200);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal') && this.isTopMost() && this.closeOnOutsideClick) {
            this.close();
        }
    };
    ModalComponent.prototype.onKeyDownHandler = function (event) {
        // If ESC key and TOP MOST modal, close it.
        if (event.key === 'Escape' && this.isTopMost()) {
            this.close();
        }
    };
    /**
     * Returns true if this modal is the top most modal.
     */
    ModalComponent.prototype.isTopMost = function () {
        return !this.elementRef.nativeElement.querySelector(':scope modal > .modal');
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])('modalHeader'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], ModalComponent.prototype, "header", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])('modalBody'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _b || Object)
], ModalComponent.prototype, "body", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])('modalFooter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _c || Object)
], ModalComponent.prototype, "footer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "closeOnOutsideClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "onContainerClicked", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "onKeyDownHandler", null);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'modal',
        template: __webpack_require__("../../../../../src/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/modal.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _e || Object])
], ModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("../../../../../src/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]],
        providers: [],
    })
], ModalModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map