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

module.exports = "I'm &lt;app-modal-content&gt; and it's only the &lt;modal&gt; who brought me to live. This component\nwill get destroyed when the modal is closed.\n\n<pre>\n  <code>\n&lt;button (click)=&quot;componentInsideModal.open()&quot;&gt;&lt;h2&gt;Component inside modal&lt;/h2&gt;&lt;/button&gt;\n&lt;modal #componentInsideModal&gt;\n  &lt;ng-template #modalHeader&gt;Component inside modal&lt;/ng-template&gt;\n  &lt;ng-template #modalBody&gt;\n    &lt;app-modal-content&gt;&lt;/app-modal-content&gt;\n  &lt;/ng-template&gt;\n  &lt;ng-template #modalFooter&gt;&lt;/ng-template&gt;\n&lt;/modal&gt;\n  </code>\n</pre>"

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

module.exports = "<div id=\"content\">\n  <h1>&lt;angular-custom-modal&gt;</h1>\n\n  <div id=\"actions\">\n    <button class=\"big\" (click)=\"componentInsideModal.open()\">Component inside modal</button>\n    <!-- Alternatively we can define the open call on the component \n      <button class=\"big\" (click)=\"openFromComponent()\"></button> -->\n    <button class=\"big\" (click)=\"htmlInsideModal.open()\">Raw HTML inside modal</button>\n\n    <modal #componentInsideModal>\n      <ng-template #modalHeader><h2>Component inside modal</h2></ng-template>\n      <ng-template #modalBody>\n        <app-modal-content></app-modal-content>\n      </ng-template>\n      <ng-template #modalFooter></ng-template>\n    </modal>\n\n    <modal #htmlInsideModal>\n      <ng-template #modalHeader><h2>HTML inside modal</h2></ng-template>\n      <ng-template #modalBody>\n        I'm HTML who's living on the &lt;app.component.html&gt;\n        <pre>\n          <code>\n&lt;button class=&quot;big&quot; (click)=&quot;htmlInsideModal.open()&quot;&gt;Raw HTML inside modal&lt;/button&gt;\n&lt;modal #htmlInsideModal&gt;\n&lt;ng-template #modalHeader&gt;Component inside modal&lt;/ng-template&gt;\n&lt;ng-template #modalBody&gt;\n  I'm HTML who's living on the &lt;app.component.html&gt;\n  ...\n&lt;/ng-template&gt;\n&lt;/modal&gt;\n          </code>\n        </pre>\n      </ng-template>\n    </modal>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans);", ""]);

// module
exports.push([module.i, "/* Specific Modal Styles */\n.modal-dialog {\n  color: #333;\n  background-color: #fff;\n  padding: 25px; }\n\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 14px; }\n  .modal-header > h2 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .modal-header .close {\n    background-color: #fff;\n    font-weight: 100;\n    font-size: 2.5rem;\n    border: 0;\n    border-radius: 999px;\n    padding: 0;\n    margin: 0;\n    line-height: 1rem;\n    height: 4rem;\n    width: 4rem; }\n    .modal-header .close:hover {\n      background-color: #ccc; }\n\n/* /Specific Modal Styles */\nhtml, body {\n  color: #444;\n  font-family: 'Open Sans', sans-serif;\n  background: #4aabc9;\n  background: linear-gradient(135deg, #4aabc9 0%, #7db9e8 100%);\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\nbutton {\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  transition: .2s all; }\n  button:focus {\n    outline: none; }\n\nbutton.big {\n  color: #444;\n  padding: 2rem 4rem;\n  border: 0;\n  border-radius: 4px;\n  background-color: #fff; }\n  button.big + button.big {\n    margin-left: 10px; }\n  button.big:hover {\n    background-color: #e4e4e4; }\n\nh1, h2 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 200; }\n\nh1 {\n  color: #fff;\n  padding: 30px;\n  margin: 0; }\n\n#content {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#actions {\n  margin-top: -100px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

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


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.openFromComponent = function () {
        this.componentInsideModal.open();
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

module.exports = "<div\n  (click)=\"onContainerClicked($event)\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  [ngClass]=\"{'in': visibleAnimate}\"\n  [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\"\n  *ngIf=\"visible\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n        <button class=\"close\" data-dismiss=\"modal\" type=\"button\" aria-label=\"Close\" (click)=\"close()\">×</button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  background-color: rgba(0, 0, 0, 0.15); }\n\n/deep/ .modal-dialog {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);

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
    function ModalComponent() {
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
        document.body.style.overflow = 'hidden';
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 200);
    };
    ModalComponent.prototype.close = function () {
        var _this = this;
        document.body.style.overflow = 'auto';
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 100);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.close();
        }
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
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'modal',
        template: __webpack_require__("../../../../../src/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/modal.component.scss")],
    })
], ModalComponent);

var _a, _b, _c;
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