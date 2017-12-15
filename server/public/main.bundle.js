webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routes__ = __webpack_require__("../../../../../src/app/shared/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs.operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_main_main_component__ = __webpack_require__("../../../../../src/app/shared/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_lobby_lobby_component__ = __webpack_require__("../../../../../src/app/shared/components/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_components_restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/shared/components/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_components_edit_restaurant_edit_restaurant_component__ = __webpack_require__("../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_components_products_products_component__ = __webpack_require__("../../../../../src/app/shared/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_components_edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/shared/components/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_components_team_team_component__ = __webpack_require__("../../../../../src/app/shared/components/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_components_order_order_component__ = __webpack_require__("../../../../../src/app/shared/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_components_ticket_ticket_component__ = __webpack_require__("../../../../../src/app/shared/components/ticket/ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_components_total_tickets_total_tickets_component__ = __webpack_require__("../../../../../src/app/shared/components/total-tickets/total-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_data_lobby_data_lobby_component__ = __webpack_require__("../../../../../src/app/shared/components/data-lobby/data-lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_components_data_data_component__ = __webpack_require__("../../../../../src/app/shared/components/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_menu_service__ = __webpack_require__("../../../../../src/app/shared/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_services_ticket_service__ = __webpack_require__("../../../../../src/app/shared/services/ticket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/bundles/ng2-bs3-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_components_lobby_lobby_component__["a" /* LobbyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_components_restaurant_restaurant_component__["a" /* RestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_components_edit_restaurant_edit_restaurant_component__["a" /* EditRestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_components_edit_product_edit_product_component__["a" /* EditProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_components_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_components_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_components_ticket_ticket_component__["a" /* TicketComponent */],
                __WEBPACK_IMPORTED_MODULE_20__shared_components_total_tickets_total_tickets_component__["a" /* TotalTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__shared_components_data_lobby_data_lobby_component__["a" /* DataLobbyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_components_data_data_component__["a" /* DataComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__shared_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_31_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33_ng2_bs3_modal__["BsModalModule"],
                __WEBPACK_IMPORTED_MODULE_34_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_35_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_30__jaspero_ng_confirmations__["JasperoConfirmationsModule"],
                __WEBPACK_IMPORTED_MODULE_36_ng2_charts__["ChartsModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_services_restaurant_service__["a" /* RestaurantService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_services_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_28__shared_services_table_service__["a" /* TableService */],
                __WEBPACK_IMPORTED_MODULE_30__jaspero_ng_confirmations__["ConfirmationService"],
                __WEBPACK_IMPORTED_MODULE_29__shared_services_ticket_service__["a" /* TicketService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/rxjs.operators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// Statics


// Operators








/***/ }),

/***/ "../../../../../src/app/shared/components/data-lobby/data-lobby.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lobby-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.lobby-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 20px;\n}\n\n.lobby-head i {\n  margin: 0 10px;\n}\n\n.lobby-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  margin-bottom: 10px;\n  font-size: 4em;\n}\n\n.restaurant-add {\n  margin-top: 20px;\n  font-size: 1em;\n}\n\n.restaurant-add i {\n  margin-bottom: 10px;\n  color: rgba(207, 58, 36, 0.8);\n  font-size: 3em;\n}\n\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n}\n\n\na {\n  color: inherit;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh3 {\n  margin-bottom: 20px;\n  font-family: 'Medula One', cursive;\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/data-lobby/data-lobby.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lobby-body\" *ngIf=\"lobbyUser\">\n  <div class=\"lobby-head\">\n    <h1>Data Lobby</h1>\n  </div>\n  <div class=\"lobby-content\" *ngIf=\"restaurants || lobbyUser.restaurants\">\n    <div *ngIf=\"lobbyUser.role=='Owner'\">\n      <div class=\"restaurant-preview\" *ngFor=\"let restaurant of lobbyUser.restaurants\">\n          <a [routerLink]=\"['/data',restaurant._id]\">\n          <img src={{restaurant.image}} alt=\"restaurant-photo\">\n          <h3>{{restaurant.name}}</h3>\n          </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/data-lobby/data-lobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLobbyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataLobbyComponent = (function () {
    function DataLobbyComponent(router, userService, restaurantService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.lobbyUser = { role: '' };
        this.userService.fillUser().subscribe(function (user) {
            _this.lobbyUser = user;
        });
    }
    DataLobbyComponent.prototype.ngOnInit = function () {
    };
    DataLobbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-lobby',
            template: __webpack_require__("../../../../../src/app/shared/components/data-lobby/data-lobby.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/data-lobby/data-lobby.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */]])
    ], DataLobbyComponent);
    return DataLobbyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/data/data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.menu-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.menu-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-body\" *ngIf=\"restaurant\">\n  <div class=\"menu-head\">\n  <h1>{{restaurant.name}} - Data</h1>\n  </div>\n  <div *ngIf=\"user.role=='Owner' && show\" class=\"menu-info\">\n    <h1>Average Ticket per Table</h1>\n    <h2>{{average}}€</h2>\n    <h2>from {{restaurant.tickets.length}} tickets</h2>\n    <h1>Food Percentage of Total</h1>\n    <div style=\"display: block\">\n      <canvas baseChart\n                  [data]=\"doughnutChartData\"\n                  [labels]=\"doughnutChartLabels\"\n                  [chartType]=\"doughnutChartType\"\n                  (chartHover)=\"chartHovered($event)\"\n                  (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n    <h1>Most Frequent Tables</h1>\n    <div>\n      <div style=\"display: block\">\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ticket_service__ = __webpack_require__("../../../../../src/app/shared/services/ticket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataComponent = (function () {
    function DataComponent(router, route, userService, restaurantService, ticketService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.ticketService = ticketService;
        this.restaurant = {};
        this.user = {};
        this.data = {};
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.foodObj = { foodArray: [], foodAmount: [] };
        this.show = false;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Total'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [];
        this.tableObj = { tableArray: [], tableAmount: [] };
        this.average = 0;
        this.route.params.subscribe(function (params) {
            _this.restId = params['id'];
            _this.userService.fillUser().subscribe(function (user) {
                _this.user = user;
                _this.restaurantService.getOneRestaurant(_this.restId).subscribe(function (restaurant) {
                    _this.restaurant = restaurant;
                    console.log(_this.restaurant);
                    restaurant.tickets.forEach(function (e) {
                        _this.average += e.total_price;
                        e.total_order.forEach(function (x, i) {
                            if (_this.foodObj.foodArray.indexOf(x.name) == -1) {
                                _this.foodObj.foodArray.push(x.name);
                                _this.foodObj.foodAmount.push(x.amount);
                            }
                            else {
                                _this.foodObj.foodAmount[_this.foodObj.foodArray.indexOf(x.name)] = parseInt(_this.foodObj.foodAmount[_this.foodObj.foodArray.indexOf(x.name)]) + parseInt(x.amount);
                            }
                        });
                        if (_this.tableObj.tableArray.indexOf(e.table_name) == -1) {
                            _this.tableObj.tableArray.push(e.table_name);
                            _this.tableObj.tableAmount.push(1);
                        }
                        else {
                            _this.tableObj.tableAmount[_this.tableObj.tableArray.indexOf(e.table_name)] += 1;
                        }
                    });
                    _this.tableObj.tableArray.forEach(function (e, i) {
                        _this.barChartData.push({ data: [_this.tableObj.tableAmount[i]], label: _this.tableObj.tableArray[i] });
                    });
                    _this.doughnutChartLabels = _this.foodObj.foodArray;
                    _this.doughnutChartData = _this.foodObj.foodAmount;
                    _this.average = _this.average / restaurant.tickets.length;
                    _this.show = true;
                });
            });
        });
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    DataComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DataComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data',
            template: __webpack_require__("../../../../../src/app/shared/components/data/data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/data/data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_4__services_ticket_service__["a" /* TicketService */]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-res-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.edit-res-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.edit-res-info i {\n}\n\n.edit-res-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.info-buttons-edit {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 70%;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\n.edit-res-info img {\n  width: 60%;\n  height: 220px;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.edit-res-prices {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh2 {\n  margin: 10px;\n  font-family: 'Medula One', cursive;\n}\n\nh4 {\nmargin:0;\n}\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"edit-res-body\" *ngIf=\"product\">\n  <div class=\"edit-res-head\">\n    <h1>{{product.name}}</h1>\n  </div>\n  <div class=\"edit-res-info\">\n    <img src=\"{{product.image}}\" alt=\"Product-photo\">\n    <h2>Description:</h2>\n    <h4>{{product.description}}</h4>\n    <div class=\"edit-res-prices\">\n      <h2>Base Cost: {{product.inventory_price}} €</h2>\n      <h2>Price in Menu: {{product.menu_price}} €</h2>\n    </div>\n    <div class=\"info-buttons\">\n      <div class=\"info-buttons-edit\">\n        <button data-toggle=\"modal\" data-target=\"#menuModal\">To Menu</button>\n        <button data-toggle=\"modal\" data-target=\"#prodModal\">Edit</button>\n        <button (click)=\"prodDelete()\">Delete</button>\n      </div>\n    </div>\n    <h2>Total Left: {{product.quantity}} units</h2>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"prodModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>Add New Product<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"prodEdit()\" #prodForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"name\">Name</label><br>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"product.name\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"description\">Description</label><br>\n                  <textarea type=\"text\" name=\"description\" [(ngModel)]=\"product.description\" required></textarea>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"classification\">Classification</label>\n                  <select name=\"classification\" [(ngModel)]=\"product.classification\" required>\n                    <option value=\"Food\">Food</option>\n                    <option value=\"Drink\">Drink</option>\n                    <option value=\"Utils\">Utils</option>\n                  </select>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"denomination\">Denomination</label>\n                  <select name=\"denomination\" [(ngModel)]=\"product.denomination\" required>\n                    <option value=\"Meat\">Meat</option>\n                    <option value=\"Fish\">Fish</option>\n                    <option value=\"Sauce\">Sauce</option>\n                    <option value=\"Fruit\">Fruit</option>\n                    <option value=\"Vegetable\">Vegetable</option>\n                    <option value=\"Cereal\">Cereal</option>\n                    <option value=\"Alcohol\">Alcohol</option>\n                    <option value=\"Alcohol-Free\">Alcohol-Free</option>\n                  </select>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"inventory_price\">Initial Cost</label><br>\n                  <input type=\"number\" name=\"inventory_price\" [(ngModel)]=\"product.inventory_price\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"menu_price\">Price in Menu</label><br>\n                  <input type=\"number\" name=\"menu_price\" [(ngModel)]=\"product.menu_price\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"quantity\">Quantity</label><br>\n                  <input type=\"number\" name=\"quantity\" [(ngModel)]=\"product.quantity\" min=\"0\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"file\">Photo</label><br>\n                  <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!prodForm.valid\" data-toggle=\"modal\" data-target=\"#prodModal\">Edit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n\n\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"menuModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>\nAdd to Menu<i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n</h1>\n        </div>\n        <form (ngSubmit)=\"prodToMenu()\" #menuForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"restaurant\">Choose Restaurant</label>\n                  <select *ngIf=\"user\" name=\"denomination\" [(ngModel)]=\"restaurant\" required>\n                    <option *ngFor=\"let rest of user.restaurants\" value=\"{{rest._id}}\">{{rest.name}}</option>\n                  </select>\n                </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!menuForm.valid\" data-toggle=\"modal\" data-target=\"#menuModal\">Add</button>\n            </div>\n          </div>\n        </form>\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProductComponent = (function () {
    function EditProductComponent(_confirmation, service, router, route, userService, productService) {
        var _this = this;
        this._confirmation = _confirmation;
        this.service = service;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.productService = productService;
        this.id = '';
        this.product = { name: '', description: '', classification: '', denomination: '', quantity: 0, inventory_price: 0, menu_price: 0 };
        this.user = {};
        this.restaurant = '';
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.productService.getOneProduct(_this.id).subscribe(function (product) {
                _this.product = product;
                _this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
                    url: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].BASE_URL + "/product/edit/" + product._id
                });
                _this.userService.fillUser().subscribe(function (user) { _this.user = user; console.log(user); });
            });
        });
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent.prototype.prodEdit = function () {
        var _this = this;
        this.service.success('Product Edited!', 'Changed it from your menu or inventory!', {
            timeOut: 2000,
            showProgressBar: true,
            clickToClose: true
        });
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.product.name);
            form.append('description', _this.product.description);
            form.append('classification', _this.product.classification);
            form.append('denomination', _this.product.denomination);
            form.append('quantity', _this.product.quantity);
            form.append('inventory_price', _this.product.inventory_price);
            form.append('menu_price', _this.product.menu_price);
        };
        this.uploader.uploadAll();
        setTimeout(function () {
            var _this = this;
            this.productService.getOneProduct(this.id).subscribe(function (product) {
                _this.product = product;
            });
        }.bind(this), 2500);
    };
    EditProductComponent.prototype.prodDelete = function () {
        var _this = this;
        this._confirmation.create('Delete Product', 'Are you sure?', {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            confirmText: 'Delete',
            declineText: 'Close'
        })
            .subscribe(function (ans) {
            if (ans.resolved) {
                _this.service.error('Product Deleted!', 'You no longer have this product in your inventory', {
                    timeOut: 2000,
                    showProgressBar: true,
                    clickToClose: true
                });
                _this.productService.productDelete(_this.id).subscribe(function () {
                    _this.router.navigate(['products']);
                });
            }
        });
    };
    EditProductComponent.prototype.prodToMenu = function () {
        var _this = this;
        this._confirmation.create('Add to Menu?', 'Confirm to include this item in menu', {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            confirmText: 'Confirm',
            declineText: 'Cancel'
        })
            .subscribe(function (ans) {
            if (ans.resolved) {
                _this.productService.addProdToMenu(_this.id, _this.restaurant).subscribe(function () {
                    _this.service.success('Added To Menu!', 'New item added to you restaurant menu!', {
                        timeOut: 1500,
                        showProgressBar: true,
                        clickToClose: true
                    });
                });
            }
        });
    };
    EditProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__("../../../../../src/app/shared/components/edit-product/edit-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-res-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.edit-res-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.edit-res-info i {\n}\n\n.edit-res-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.info-buttons-edit {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 50%;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n\n<div class=\"edit-res-body\" *ngIf=\"restaurant\">\n  <div class=\"edit-res-head\">\n  <h1>{{restaurant.name}}</h1>\n</div>\n<div class=\"edit-res-info\">\n  <img src=\"{{restaurant.image}}\" alt=\"restaurant-photo\">\n    <div class=\"info-buttons\">\n      <h2>For the public:</h2>\n      <div class=\"info-buttons-edit\">\n        <a [routerLink]=\"['/menu',restaurant._id]\"><button>Menu</button></a>\n        <button data-toggle=\"modal\" data-target=\"#restModal\">Edit</button>\n      </div>\n      <h2>Management:</h2>\n      <div class=\"info-buttons-edit\">\n        <a [routerLink]=\"['/total',restaurant._id]\"><button>Tickets</button></a>\n        <a [routerLink]=\"['/team',restaurant._id]\"><button>Team</button></a>\n        <a [routerLink]=\"['/tables',restaurant._id]\"><button>Tables</button></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"restModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>Edit Restaurant<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"restEdit()\" #restForm=\"ngForm\">\n            <div class=\"modal-body\">\n              <div class=\"modal-input\">\n                <label for=\"name\">Name</label><br>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"restaurant.name\" required>\n              </div>\n              <div class=\"modal-input\">\n                <label for=\"description\">Description</label><br>\n                <textarea type=\"text\" name=\"description\" [(ngModel)]=\"restaurant.description\" required></textarea>\n              </div>\n              <div class=\"modal-input\">\n                <label for=\"open-time\">Opening:</label><br>\n                <input type=\"time\" name=\"openTime\" value=\"00:00\" [(ngModel)]=\"restaurant.openTime\" required>\n              </div>\n              <div class=\"modal-input\">\n                <label for=\"close-time\">Closing:</label><br>\n                <input type=\"time\" name=\"closeTime\" value=\"00:00\" [(ngModel)]=\"restaurant.closeTime\" required>\n              </div>\n              <div class=\"modal-input\">\n                <label for=\"file\">Photo</label><br>\n                <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!restForm.valid\" data-toggle=\"modal\" data-target=\"#restModal\">Edit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditRestaurantComponent = (function () {
    function EditRestaurantComponent(service, router, route, userService, restaurantService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.restaurant = { name: '', description: '', openTime: '', closeTime: '' };
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.restaurantService.getOneRestaurant(_this.id).subscribe(function (restaurant) {
                _this.restaurant = restaurant;
                _this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
                    url: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + "/restaurant/edit/" + restaurant._id
                });
            });
        });
    }
    EditRestaurantComponent.prototype.ngOnInit = function () {
    };
    EditRestaurantComponent.prototype.restEdit = function () {
        var _this = this;
        this.service.success('Product Edited!', 'Changed it from your menu or inventory!', {
            timeOut: 2000,
            showProgressBar: true,
            clickToClose: true
        });
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.restaurant.name);
            form.append('description', _this.restaurant.description);
            form.append('openTime', _this.restaurant.openTime);
            form.append('closeTime', _this.restaurant.closeTime);
        };
        this.uploader.uploadAll();
        setTimeout(function () {
            var _this = this;
            this.restaurantService.getOneRestaurant(this.id).subscribe(function (restaurant) {
                _this.restaurant = restaurant;
            });
        }.bind(this), 2500);
    };
    EditRestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-restaurant',
            template: __webpack_require__("../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */]])
    ], EditRestaurantComponent);
    return EditRestaurantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-list {\n  color: rgba(207, 58, 36, 0.8);\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  background-color: white;\n  padding-top: 10px;\n  border-top: 0.5px solid rgba(117, 125, 117, 0.6);\n}\n\n.fa {\n  color: rgba(207, 58, 36, 0.8);\n  font-size: 2.5em;\n}\n\np {\n  font-size: 1.2em;\n  margin-top: 0px;\n}\n\n.novalid {\n  color: rgba(117, 125, 117, 0.6);\n}\n\na {\n  color: inherit;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-list\">\n  <div class=\"footer-icon\">\n    <div *ngIf=\"user.role!='Manager' && user.role!='Waiter'\">\n      <a [routerLink]=\"['/lobby']\">\n        <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n        <p>Lobby</p>\n      </a>\n    </div>\n    <div *ngIf=\"user.role=='Manager' || user.role=='Waiter'\">\n      <a [routerLink]=\"['/tables', user.works_in]\">\n        <i class=\"fa fa-window-maximize\" aria-hidden=\"true\"></i>\n        <p>Tables</p>\n      </a>\n    </div>\n  </div>\n  <div class=\"footer-icon\">\n    <div *ngIf=\"user.role=='Owner'\">\n      <a [routerLink]=\"['/products']\">\n        <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n        <p>Products</p>\n      </a>\n    </div>\n    <div *ngIf=\"user.role!='Owner'\">\n      <i class=\"fa fa-list novalid\" aria-hidden=\"true\"></i>\n      <p class=\"novalid\">Products</p>\n    </div>\n  </div>\n  <div class=\"footer-icon\">\n    <div *ngIf=\"user.role=='Owner'\">\n      <a [routerLink]=\"['/data-lobby']\">\n        <i class=\"fa fa-database\" aria-hidden=\"true\"></i>\n        <p>Data</p>\n      </a>\n    </div>\n    <div *ngIf=\"user.role!='Owner'\">\n      <i class=\"fa fa-database novalid\" aria-hidden=\"true\"></i>\n      <p class=\"novalid\">Data</p>\n    </div>\n  </div>\n  <div (click)=\"userLogout()\" class=\"footer-icon\">\n    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n    <p>Logout</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthenticated().subscribe(function (res) { _this.user = res; }, function (error) { _this.goHome(); });
    };
    FooterComponent.prototype.userLogout = function () {
        var _this = this;
        this.authService.userLogout().subscribe(function (res) {
            _this.goHome();
        });
    };
    FooterComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/lobby/lobby.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lobby-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.lobby-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 20px;\n}\n\n.lobby-head i {\n  margin: 0 10px;\n}\n\n.lobby-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  margin-bottom: 10px;\n  font-size: 4em;\n}\n\n.restaurant-add {\n  margin-top: 20px;\n  font-size: 1em;\n}\n\n.restaurant-add i {\n  margin-bottom: 10px;\n  color: rgba(207, 58, 36, 0.8);\n  font-size: 3em;\n}\n\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n}\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n\na {\n  color: inherit;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh3 {\n  margin-bottom: 20px;\n  font-family: 'Medula One', cursive;\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/lobby/lobby.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n\n<div class=\"lobby-body\" *ngIf=\"lobbyUser\">\n  <div class=\"lobby-head\">\n    <h1>DRest Lobby</h1>\n    <h4 *ngIf='lobbyUser.role==\"Customer\"'><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>\nWhat's your plan today {{lobbyUser.username}}?<i class=\"fa fa-glass\" aria-hidden=\"true\"></i>\n</h4>\n    <h4 *ngIf='lobbyUser.role==\"Owner\"'><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\nManage your businesses!<i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n</h4>\n  </div>\n\n  <div class=\"lobby-content\" *ngIf=\"restaurants || lobbyUser.restaurants\">\n    <div *ngIf=\"lobbyUser.role=='Owner'\">\n      <div class=\"restaurant-preview\" *ngFor=\"let restaurant of lobbyUser.restaurants\">\n          <a [routerLink]=\"['/edit',restaurant._id]\">\n          <img src={{restaurant.image}} alt=\"restaurant-photo\">\n          <h3>{{restaurant.name}}</h3>\n          </a>\n      </div>\n    </div>\n    <div *ngIf=\"lobbyUser.role=='Customer'\">\n      <div class=\"restaurant-preview\" *ngFor=\"let restaurant of restaurants\">\n        <a [routerLink]=\"['/restaurant',restaurant._id]\">\n        <img src={{restaurant.image}} alt=\"restaurant-photo\">\n        <h3>{{restaurant.name}}</h3>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"lobbyUser.role=='Owner'\">\n    <div class=\"restaurant-add\">\n      <i data-toggle=\"modal\" data-target=\"#restModal\" class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n      <p>Add a new bar or restaurant</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"restModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>Create Restaurant<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"restNew()\" #restForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"name\">Name</label><br>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"newRestaurant.name\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"description\">Description</label><br>\n                  <textarea type=\"text\" name=\"description\" [(ngModel)]=\"newRestaurant.description\" required></textarea>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"open-time\">Opening:</label>\n                  <input type=\"time\" name=\"openTime\" value=\"00:00\" [(ngModel)]=\"newRestaurant.openTime\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"close-time\">Closing:</label>\n                  <input type=\"time\" name=\"closeTime\" value=\"00:00\" [(ngModel)]=\"newRestaurant.closeTime\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"file\">Photo</label><br>\n                  <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!restForm.valid\" data-toggle=\"modal\" data-target=\"#restModal\">Create</button>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/lobby/lobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LobbyComponent = (function () {
    function LobbyComponent(service, router, userService, restaurantService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.lobbyUser = { role: '' };
        this.newRestaurant = { name: '', description: '', openTime: '', closeTime: '' };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + "/restaurant/new"
        });
        this.userService.fillUser().subscribe(function (user) {
            _this.lobbyUser = user;
            if (_this.lobbyUser.role == 'Customer') {
                _this.restaurantService.getRestaurants().subscribe(function (restaurants) {
                    _this.restaurants = restaurants;
                    console.log(_this.restaurants);
                    console.log(_this.lobbyUser);
                });
            }
        });
    }
    LobbyComponent.prototype.ngOnInit = function () {
    };
    LobbyComponent.prototype.restNew = function () {
        var _this = this;
        this.service.success('Restaurant Created!', 'You can now start managing it!', {
            timeOut: 3000,
            showProgressBar: true,
            clickToClose: true
        });
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newRestaurant.name);
            form.append('description', _this.newRestaurant.description);
            form.append('openTime', _this.newRestaurant.openTime);
            form.append('closeTime', _this.newRestaurant.closeTime);
        };
        this.uploader.uploadAll();
        setTimeout(function () {
            var _this = this;
            this.userService.fillUser().subscribe(function (user) {
                _this.lobbyUser = user;
            });
        }.bind(this), 2500);
        this.newRestaurant = { name: '', description: '', openTime: '', closeTime: '' };
    };
    LobbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lobby',
            template: __webpack_require__("../../../../../src/app/shared/components/lobby/lobby.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/lobby/lobby.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */]])
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: inherit;\n}\n\n.main-banner {\n  background-image: url(\"http://res.cloudinary.com/ddpsctbpe/image/upload/v1512900814/drest-banner_kl0mjb.png\");\n  background-size: cover;\n  text-align: center;\n  padding: 30px;\n  margin: 0\n}\n\n.main-banner h1 {\n  margin: 0;\n  font-size: 5em;\n  color: white;\n  font-family: 'Medula One', cursive;\n}\n\n.main-banner h2 {\n  margin: 0;\n  font-size: 4em;\n  color: white;\n  font-family: 'Medula One', cursive;\n}\n\n.main-users {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.user p {\n  color: white;\n  font-weight: bold;\n  font-size: 1em;\n  margin-bottom: 15px;\n}\n\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n}\n\n.main-body {\n  text-align: center;\n  color: #0d0a0a;\n  padding: 0 10px;\n  margin: 0;\n}\n\n.main-body h1 {\n  font-family: 'Medula One', cursive;\n  font-size: 2.5em;\n  margin-bottom: 20px;\n}\n\n.main-body p {\n  margin-top: 10px;\n}\n\n.main-body i {\n  font-size: 1.5em;\n}\n\n.main-description {\n  padding: 0px 15px;\n}\n\n.main-separator {\n  font-size: 2em;\n  color: rgba(207, 58, 36, 0.8);\n  margin-top: 40px;\n}\n\n.main-separator hr {\n  margin: 5px;\n}\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n\n<div class=\"main-banner\" id=\"main-top\">\n  <h2>Welcome to</h2>\n  <h1>DRest!</h1>\n  <div class=\"main-users\">\n    <div class=\"user\">\n      <p>New to the service?</p>\n      <button data-toggle=\"modal\" data-target=\"#myModal\">Sign Up</button>\n    </div>\n    <div class=\"user\">\n      <p>Already an user?</p>\n      <button data-toggle=\"modal\" data-target=\"#loginModal\">Login</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"main-body\">\n  <h1>Manage your business</h1>\n    <div class=\"main-description\">\n        <i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>\n        <p>Make your business work faster than ever!</p>\n    </div>\n    <div class=\"main-description\">\n        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n        <p>Generate complete and continuous data with your workflow.</p>\n    </div>\n    <div class=\"main-description\">\n        <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n        <p>Let your customers know you, become social and bigger!</p>\n    </div>\n    <div class=\"main-separator\">\n      <hr>\n      <a pageScroll href=\"#main-bottom\" [pageScrollDuration]=\"800\"><i class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i></a>\n      <hr>\n    </div>\n    <h1>Look for the best Restaurant</h1>\n    <div class=\"main-description\">\n        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n        <p>Book in advance with an easy click!</p>\n    </div>\n    <div class=\"main-description\">\n        <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\n        <p>Reliable comments from real customers</p>\n    </div>\n    <div class=\"main-description\">\n        <i class=\"fa fa-diamond\" aria-hidden=\"true\"></i>\n        <p>See the most famous dishes in the menu...</p>\n    </div>\n    <div class=\"main-description\">\n        <i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\n        <p>...or the best drinks in the place!</p>\n    </div>\n    <div class=\"main-separator\">\n      <hr>\n      <a pageScroll href=\"#main-top\" [pageScrollDuration]=\"300\"><i id='main-bottom' class=\"fa fa-eject\" aria-hidden=\"true\"></i></a>\n      <hr>\n    </div>\n</div>\n\n\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>DRest Registration<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"userSignUp()\" #signupForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"username\">Username</label><br>\n                  <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"email\">Email</label><br>\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"role\">Account type</label><br>\n                  <select name=\"role\" [(ngModel)]=\"user.role\" required>\n                    <option value=\"Owner\">Owner</option>\n                    <option value=\"Customer\">Customer</option>\n                  </select>\n                </div>\n                <div *ngIf=\"user.role=='Customer'\" class=\"modal-input\">\n                  <label for=\"password\">Password</label><br>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n                </div>\n                <div *ngIf=\"user.role=='Owner'\" class=\"modal-input\">\n                  <label for=\"information\">Give some insight about yourself</label><br>\n                  <textarea rows=\"3\" type=\"information\" name=\"information\" [(ngModel)]=\"user.information\" required>\n                  </textarea>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!signupForm.valid\" data-toggle=\"modal\" data-target=\"#myModal\">SignUp</button>\n              <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"loginModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>DRest Login<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"userLogin()\" #loginForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"username\">Email</label><br>\n                  <input type=\"text\" name=\"username\" [(ngModel)]=\"userLog.username\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"password\">Password</label><br>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"userLog.password\" required>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!loginForm.valid\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</button>\n              <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(router, authService, service) {
        this.router = router;
        this.authService = authService;
        this.service = service;
        this.user = { role: '' };
        this.userLog = {};
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.userSignUp = function () {
        var _this = this;
        this.authService.userSignUp(this.user)
            .subscribe(function (res) {
            if (_this.user.role == "Owner") {
                _this.service.success('Registration Complete!', 'You\'ll receive a confirmation email soon.', {
                    timeOut: 3000,
                    showProgressBar: true,
                    clickToClose: true
                });
            }
            if (_this.user.role == "Customer") {
                _this.service.success('Registration Complete!', 'You can now Log in the service!', {
                    timeOut: 3000,
                    showProgressBar: true,
                    clickToClose: true
                });
            }
            _this.user = { role: '' };
        }, function (error) {
            _this.service.error('Registration Failed!', 'Email is already in use!', {
                timeOut: 3000,
                showProgressBar: true,
                clickToClose: true
            });
        });
    };
    MainComponent.prototype.userLogin = function () {
        var _this = this;
        this.authService.userLogin(this.userLog)
            .subscribe(function (res) {
            if (res.role == 'Owner' || res.role == 'Customer')
                _this.router.navigate(['/lobby']);
            if (res.role == 'Manager' || res.role == 'Waiter')
                _this.router.navigate(["/tables/" + res.works_in]);
        }, function (error) {
            _this.service.error('Login Failed!', 'Wrong Email or password', {
                timeOut: 3000,
                showProgressBar: true,
                clickToClose: true
            });
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/shared/components/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.menu-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.menu-info i {\n  font-size: 0.7em;\n  margin: 0 10px;\n  color: rgba(13, 10, 10, 0.9)\n}\n\n.menu-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.menu-list {\n  padding: 0 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.menu-list {\n  padding: 0 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"menu-body\" *ngIf=\"restaurant\">\n  <div class=\"menu-head\">\n  <h1>{{restaurant.name}} - Menu</h1>\n  </div>\n  <div *ngIf=\"user && restaurant\" class=\"menu-info\">\n    <h1><i class=\"fa fa-apple\" aria-hidden=\"true\"></i>Food<i class=\"fa fa-apple\" aria-hidden=\"true\"></i></h1>\n    <div *ngFor=\"let food of restaurant.menu\">\n      <div class=\"menu-list\" *ngIf=\"food.classification == 'Food' && user.role!='Customer'\">\n        <h2>{{food.name}}........................{{food.menu_price}}€</h2>\n        <button (click)=\"deleteThis(food._id)\" *ngIf=\"user._id==restaurant.owner\">Delete</button>\n        <button *ngIf=\"user._id!=restaurant.owner\">Order</button>\n      </div>\n      <div class=\"menu-list-user\" *ngIf=\"food.classification == 'Food' && user.role=='Customer'\">\n        <h2>{{food.name}}........................{{food.menu_price}}€</h2>\n      </div>\n    </div>\n    <h1><i class=\"fa fa-beer\" aria-hidden=\"true\"></i>Drinks<i class=\"fa fa-beer\" aria-hidden=\"true\"></i></h1>\n    <div *ngFor=\"let drink of restaurant.menu\">\n      <div class=\"menu-list\" *ngIf=\"drink.classification == 'Drink' && user.role!='Customer'\">\n        <h2>{{drink.name}}........................{{drink.menu_price}}€</h2>\n        <button (click)=\"deleteThis(drink._id)\" *ngIf=\"user._id==restaurant.owner\">Delete</button>\n        <button *ngIf=\"user._id!=restaurant.owner\">Order</button>\n      </div>\n      <div class=\"menu-list-user\" *ngIf=\"drink.classification == 'Drink' && user.role=='Customer'\">\n        <h2>{{drink.name}}........................{{drink.menu_price}}€</h2>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/shared/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuComponent = (function () {
    function MenuComponent(service, _confirmation, router, route, userService, menuService, restaurantService) {
        var _this = this;
        this.service = service;
        this._confirmation = _confirmation;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.menuService = menuService;
        this.restaurantService = restaurantService;
        this.menu = {};
        this.restaurant = {};
        this.user = {};
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.restaurantService.getOneRestaurant(_this.id).subscribe(function (restaurant) {
                _this.restaurant = restaurant;
            });
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.fillUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    MenuComponent.prototype.deleteThis = function (id) {
        var _this = this;
        this._confirmation.create('Delete Product', 'Are you sure?', {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            confirmText: 'Delete',
            declineText: 'Close'
        })
            .subscribe(function (ans) {
            if (ans.resolved) {
                _this.service.error('Product Deleted!', 'You can add it again later from your product list', {
                    timeOut: 2000,
                    showProgressBar: true,
                    clickToClose: true
                });
                _this.menuService.deleteThis(_this.id, id).subscribe(function (res) {
                    _this.restaurantService.getOneRestaurant(_this.id).subscribe(function (restaurant) {
                        _this.restaurant = restaurant;
                    });
                });
            }
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/shared/components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.menu-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.menu-info i {\n  font-size: 0.7em;\n  margin: 0 10px;\n  color: rgba(13, 10, 10, 0.9)\n}\n\n.menu-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.menu-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 10px;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\n.menu-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.menu-buttons i {\n  margin: 0;\n  font-size: 2.5em;\n  color: rgba(207, 58, 36, 0.8);\n  margin: auto 10px;\n}\n\n.menu-buttons button {\n  margin: 10px 0;\n  padding: 0;\n  background-color: white;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"menu-body\" *ngIf=\"restaurant\">\n  <div class=\"menu-head\">\n  <h1>{{restaurant.name}} - Menu</h1>\n  </div>\n  <div *ngIf=\"user.role!='Owner' && restaurant\" class=\"menu-info\">\n    <a *ngIf=\"user.role=='Manager' && table.orders.length\" [routerLink]=\"['/ticket',tableId]\"><button>Ticket</button></a>\n    <h1><i class=\"fa fa-apple\" aria-hidden=\"true\"></i>Food<i class=\"fa fa-apple\" aria-hidden=\"true\"></i></h1>\n    <div *ngFor=\"let food of restaurant.menu\">\n      <div class=\"menu-list\" *ngIf=\"food.classification == 'Food'\">\n        <h2>{{food.name}}........................{{food.menu_price}}€</h2>\n        <div class=\"menu-buttons\">\n          <button (click)=\"plusThis(food._id)\" *ngIf=\"user._id!=restaurant.owner\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i></button>\n          <button (click)=\"minusThis(food._id)\" *ngIf=\"user._id!=restaurant.owner\"><i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i></button>\n        </div>\n      </div>\n    </div>\n    <h1><i class=\"fa fa-beer\" aria-hidden=\"true\"></i>Drinks<i class=\"fa fa-beer\" aria-hidden=\"true\"></i></h1>\n    <div *ngFor=\"let drink of restaurant.menu\">\n      <div class=\"menu-list\" *ngIf=\"drink.classification == 'Drink'\">\n        <h2>{{drink.name}}........................{{drink.menu_price}}€</h2>\n        <div class=\"menu-buttons\">\n          <button (click)=\"plusThis(drink._id)\" *ngIf=\"user._id!=restaurant.owner\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i></button>\n          <button (click)=\"minusThis(drink._id)\" *ngIf=\"user._id!=restaurant.owner\"><i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/shared/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderComponent = (function () {
    function OrderComponent(service, _confirmation, router, route, userService, menuService, restaurantService, tableService) {
        var _this = this;
        this.service = service;
        this._confirmation = _confirmation;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.menuService = menuService;
        this.restaurantService = restaurantService;
        this.tableService = tableService;
        this.menu = {};
        this.restaurant = {};
        this.user = {};
        this.table = { orders: [] };
        this.route.params.subscribe(function (params) {
            _this.tableId = params['id'];
            _this.userService.fillUser().subscribe(function (user) {
                _this.user = user;
                _this.restaurantService.getOneRestaurant(user.works_in).subscribe(function (restaurant) {
                    _this.restaurant = restaurant;
                    _this.tableService.getTable(_this.tableId).subscribe(function (table) {
                        _this.table = table;
                    });
                });
            });
        });
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.plusThis = function (objId) {
        var _this = this;
        this.service.success('Added to Order!', 'Keem the food coming!', {
            timeOut: 800,
            showProgressBar: true,
            clickToClose: true
        });
        this.tableService.plusThis(this.tableId, objId).subscribe(function (table) {
            _this.table = table;
            console.log(_this.table);
        });
    };
    OrderComponent.prototype.minusThis = function (objId) {
        var _this = this;
        this.service.alert('Eliminated from Order!', 'Want more food?', {
            timeOut: 800,
            showProgressBar: true,
            clickToClose: true
        });
        this.tableService.minusThis(this.tableId, objId).subscribe(function (table) {
            _this.table = table;
            console.log(_this.table);
        });
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/shared/components/order/order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_7__services_table_service__["a" /* TableService */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.product-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 20px;\n}\n\n.product-head i {\n  margin: 0 10px;\n}\n\n.product-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  margin-bottom: 10px;\n  font-size: 4em;\n}\n\n.product-add {\n  margin-top: 20px;\n  font-size: 1em;\n}\n\n.product-add i {\n  margin-bottom: 10px;\n  color: rgba(207, 58, 36, 0.8);\n  font-size: 3em;\n}\n\n.product-buttons {\n  margin-bottom: 20px;\n}\n\n.product-buttons button {\n  margin: 0 5px;\n  font-size: 1.1em;\n}\n\n.product-preview {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.product-single {\n  -ms-flex-preferred-size: 40%;\n      flex-basis: 40%;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\na {\n  color: inherit;\n}\n\nimg {\n  width: 100%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh3 {\n  margin-bottom: 20px;\n  font-family: 'Medula One', cursive;\n  margin-top: 5px;\n}\n\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n}\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n\n<div class=\"product-body\" *ngIf=\"productUser\">\n  <div class=\"product-head\">\n    <h1>{{productUser.username}}'s ProductList</h1>\n  </div>\n\n  <div class=\"product-content\" *ngIf=\"productsArray\">\n    <div class=\"product-sort\" *ngIf=\"productUser.role=='Owner'\">\n      <div class=\"product-buttons\">\n        <button (click)=\"displayAll()\">All</button>\n        <button (click)=\"displayFood()\">Food</button>\n        <button (click)=\"displayDrink()\">Drinks</button>\n        <button (click)=\"displayUtil()\">Utils</button>\n      </div>\n      <div class=\"product-total-list\">\n        <div class=\"product-preview\" *ngIf=\"showAll\">\n          <div *ngFor=\"let product of productsArray\" class=\"product-single\">\n            <a [routerLink]=\"['/products',product._id]\">\n            <img src={{product.image}} alt=\"product-photo\">\n            <h3>{{product.name}}</h3>\n            </a>\n          </div>\n        </div>\n        <div *ngIf=\"showFood\" class=\"product-preview\">\n          <div *ngFor=\"let food of foodArray\" class=\"product-single\">\n            <a [routerLink]=\"['/products',food._id]\">\n            <img src={{food.image}} alt=\"product-photo\">\n            <h3>{{food.name}}</h3>\n            </a>\n          </div>\n        </div>\n        <div class=\"product-preview\" *ngIf=\"showDrink\">\n          <div *ngFor=\"let drink of drinksArray\" class=\"product-single\">\n            <a [routerLink]=\"['/products',drink._id]\">\n            <img src={{drink.image}} alt=\"product-photo\">\n            <h3>{{drink.name}}</h3>\n            </a>\n          </div>\n        </div>\n        <div class=\"product-preview\" *ngIf=\"showUtil\">\n          <div *ngFor=\"let util of utilsArray\" class=\"product-single\">\n            <a [routerLink]=\"['/products',util._id]\">\n            <img src={{util.image}} alt=\"product-photo\">\n            <h3>{{util.name}}</h3>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"productUser.role=='Owner'\">\n    <div class=\"product-add\">\n      <i data-toggle=\"modal\" data-target=\"#prodModal\" class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n      <p>Add a new product to your list</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n\n\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"prodModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>Add New Product<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"prodNew()\" #prodForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"name\">Name</label><br>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"newProduct.name\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"description\">Description</label><br>\n                  <textarea type=\"text\" name=\"description\" [(ngModel)]=\"newProduct.description\" required></textarea>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"classification\">Classification</label>\n                  <select name=\"classification\" [(ngModel)]=\"newProduct.classification\" required>\n                    <option value=\"Food\">Food</option>\n                    <option value=\"Drink\">Drink</option>\n                    <option value=\"Utils\">Utils</option>\n                  </select>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"denomination\">Denomination</label>\n                  <select name=\"denomination\" [(ngModel)]=\"newProduct.denomination\" required>\n                    <option value=\"Meat\">Meat</option>\n                    <option value=\"Fish\">Fish</option>\n                    <option value=\"Sauce\">Sauce</option>\n                    <option value=\"Fruit\">Fruit</option>\n                    <option value=\"Vegetable\">Vegetable</option>\n                    <option value=\"Cereal\">Cereal</option>\n                    <option value=\"Alcohol\">Alcohol</option>\n                    <option value=\"Alcohol-Free\">Alcohol-Free</option>\n                  </select>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"inventory_price\">Initial Cost</label><br>\n                  <input type=\"number\" name=\"inventory_price\" [(ngModel)]=\"newProduct.inventory_price\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"menu_price\">Price in Menu</label><br>\n                  <input type=\"number\" name=\"menu_price\" [(ngModel)]=\"newProduct.menu_price\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"quantity\">Quantity</label><br>\n                  <input type=\"number\" name=\"quantity\" [(ngModel)]=\"newProduct.quantity\" min=\"0\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"file\">Photo</label><br>\n                  <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!prodForm.valid\" data-toggle=\"modal\" data-target=\"#prodModal\">Create</button>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsComponent = (function () {
    function ProductsComponent(service, router, userService, productService) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.userService = userService;
        this.productService = productService;
        this.productUser = { role: '' };
        this.productsArray = [];
        this.newProduct = { name: '', description: '', classification: '', denomination: '', quantity: 0, inventory_price: 0, menu_price: 0 };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + "/product/new"
        });
        this.showAll = true;
        this.showFood = false;
        this.foodArray = [];
        this.showDrink = false;
        this.drinksArray = [];
        this.showUtil = false;
        this.utilsArray = [];
        this.userService.fillUser().subscribe(function (user) {
            _this.productUser = user;
            if (_this.productUser.role == 'Owner') {
                _this.productService.getProducts().subscribe(function (products) {
                    _this.productsArray = products;
                    _this.foodArray = products.filter(function (e) { return e.classification == "Food"; });
                    _this.drinksArray = products.filter(function (e) { return e.classification == "Drink"; });
                    _this.utilsArray = products.filter(function (e) { return e.classification == "Util"; });
                });
            }
            else {
                _this.router.navigate(['lobby']);
            }
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.prototype.prodNew = function () {
        var _this = this;
        this.service.success('Product Added!', 'You can now add it to your menu or inventory!', {
            timeOut: 3000,
            showProgressBar: true,
            clickToClose: true
        });
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newProduct.name);
            form.append('description', _this.newProduct.description);
            form.append('classification', _this.newProduct.classification);
            form.append('denomination', _this.newProduct.denomination);
            form.append('quantity', _this.newProduct.quantity);
            form.append('inventory_price', _this.newProduct.inventory_price);
            form.append('menu_price', _this.newProduct.menu_price);
        };
        this.uploader.uploadAll();
        setTimeout(function () {
            var _this = this;
            this.productService.getProducts().subscribe(function (products) {
                _this.productsArray = products;
                _this.foodArray = products.filter(function (e) { return e.classification == "Food"; });
                _this.drinksArray = products.filter(function (e) { return e.classification == "Drink"; });
                _this.utilsArray = products.filter(function (e) { return e.classification == "Util"; });
            });
        }.bind(this), 2500);
        this.newProduct = { name: '', description: '', classification: '', denomination: '', quantity: 0, inventory_price: 0, menu_price: 0 };
    };
    ProductsComponent.prototype.displayAll = function () {
        this.showAll = true;
        this.showFood = false;
        this.showDrink = false;
        this.showUtil = false;
    };
    ProductsComponent.prototype.displayFood = function () {
        this.showAll = false;
        this.showFood = true;
        this.showDrink = false;
        this.showUtil = false;
    };
    ProductsComponent.prototype.displayDrink = function () {
        this.showAll = false;
        this.showFood = false;
        this.showDrink = true;
        this.showUtil = false;
    };
    ProductsComponent.prototype.displayUtil = function () {
        this.showAll = false;
        this.showFood = false;
        this.showDrink = false;
        this.showUtil = true;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/shared/components/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/restaurant/restaurant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rest-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.rest-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.rest-info i {\n}\n\n.rest-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px 20px;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rest-body\" *ngIf=\"restaurant\">\n  <div class=\"rest-head\">\n  <h1>{{restaurant.name}}</h1>\n</div>\n<div class=\"rest-info\">\n  <img src=\"{{restaurant.image}}\" alt=\"restaurant-photo\">\n  <h2>\n    Information:\n  </h2>\n  <h4>{{restaurant.description}}</h4>\n  <h2>\n    Opening hours:\n  </h2>\n  <h4>{{restaurant.openTime}}  -  {{restaurant.closeTime}}</h4>\n\n  <div class=\"info-buttons\">\n    <a [routerLink]=\"['/menu',restaurant._id]\"><button>Menu</button></a>\n    <button>Reserve</button>\n  </div>\n</div>\n\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/restaurant/restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantComponent = (function () {
    function RestaurantComponent(router, route, userService, restaurantService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.restaurant = {};
        this.restUser = { role: '' };
        this.route.params.subscribe(function (params) {
            _this.name = params['name'];
            _this.restaurantService.getOneRestaurant(_this.name).subscribe(function (restaurant) {
                _this.restaurant = restaurant;
                console.log(_this.restaurant);
            });
        });
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    RestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__("../../../../../src/app/shared/components/restaurant/restaurant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/restaurant/restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service__["a" /* RestaurantService */]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.team-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.team-body i {\n  font-size: 0.7em;\n  margin: 0 10px;\n  color: rgba(13, 10, 10, 0.9);\n}\n\n.team-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.table-group{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.table-single {\n  display: inline-block;\n  margin: 5px;\n}\n\n.table-list {\n  background-color:rgba(207, 58, 36, 0.6);\n  color: white;\n  font-weight: bolder;\n  border-radius: 10px;\n  padding: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n}\n\n.team-add {\n  margin-top: 10px;\n  font-size: 1em;\n}\n\n.team-add i {\n  margin-bottom: 10px;\n  color: rgba(207, 58, 36, 0.8);\n  font-size: 3em;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"team-body\" *ngIf=\"restaurant\">\n  <div class=\"team-head\">\n    <h1>{{restaurant.name}} - Tables</h1>\n  </div>\n  <div *ngIf=\"user.role!='Customer' && restaurant\" class=\"team-body\">\n    <h1><i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i>Interior Tables<i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i></h1>\n      <div class=\"table-group\">\n        <div *ngFor=\"let interior of restaurant.tables\" class=\"table-single\">\n          <a [routerLink]=\"['/order',interior._id]\">\n            <div *ngIf=\"interior.zone=='Interior'\" class=\"table-list\">\n              <h2>{{interior.title}}-{{interior.table_number}}</h2>\n            </div>\n          </a>\n        </div>\n      </div>\n    <h1><i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i>Exterior Tables<i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i></h1>\n      <div class=\"table-group\">\n        <div *ngFor=\"let exterior of restaurant.tables\" class=\"table-single\">\n          <a [routerLink]=\"['/order',exterior._id]\">\n            <div *ngIf=\"exterior.zone=='Exterior'\" class=\"table-list\">\n              <h2>{{exterior.title}}-{{exterior.table_number}}</h2>\n            </div>\n          </a>\n        </div>\n      </div>\n  </div>\n  <div *ngIf=\"user.role=='Owner'\" class=\"team-add\">\n    <i data-toggle=\"modal\" data-target=\"#tableModal\" class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n    <p>Add a new table to your restaurant!</p>\n    <p>OR</p>\n  </div>\n  <div *ngIf=\"user.role=='Owner' && restaurant.tables\" class=\"team-add\">\n    <i data-toggle=\"modal\" data-target=\"#deleteModal\" class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n    <p>Click here to delete a table</p>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"tableModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>Add Table<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"tableAdd()\" #tableForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"title\">Title (Dining, Patio...)</label><br>\n                  <input type=\"text\" name=\"title\" [(ngModel)]=\"table.title\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"table_number\">Table Number</label><br>\n                  <input type=\"Number\" name=\"table_number\" [(ngModel)]=\"table.table_number\" required min=\"0\">\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"zone\">Zone</label><br>\n                  <select name=\"zone\" [(ngModel)]=\"table.zone\" required>\n                    <option value=\"Exterior\">Exterior</option>\n                    <option value=\"Interior\">Interior</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!tableForm.valid\" data-toggle=\"modal\" data-target=\"#tableModal\">Add</button>\n              <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"deleteModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>Add Table<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"tableDelete()\" #deleteForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"zone\">Zone</label><br>\n                  <select name=\"zone\" [(ngModel)]=\"delete\" required>\n                    <option *ngFor=\"let delete of restaurant.tables\" value=\"{{delete._id}}\">{{delete.title}}-{{delete.table_number}}</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!deleteForm.valid\" data-toggle=\"modal\" data-target=\"#deleteModal\">Add</button>\n              <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TableComponent = (function () {
    function TableComponent(_confirmation, router, route, userService, restaurantService, service, tableService) {
        var _this = this;
        this._confirmation = _confirmation;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.service = service;
        this.tableService = tableService;
        this.user = {};
        this.id = '';
        this.restaurant = {};
        this.table = { title: '', number: 0, zone: '' };
        this.delete = '';
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.restaurantService.getOneRestaurant(_this.id).subscribe(function (restaurant) {
                _this.restaurant = restaurant;
            });
        });
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.fillUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    TableComponent.prototype.tableAdd = function () {
        var _this = this;
        this.service.success('Table Added!', 'Keem them coming!', {
            timeOut: 2000,
            showProgressBar: true,
            clickToClose: true
        });
        this.tableService.newTable(this.table, this.id).subscribe(function (restaurant) {
            _this.restaurant = restaurant;
        });
    };
    TableComponent.prototype.tableDelete = function () {
        var _this = this;
        this.service.error('Table Deleted!', 'Remember to keep good eye on your business!', {
            timeOut: 1500,
            showProgressBar: true,
            clickToClose: true
        });
        this.tableService.tableDelete(this.delete, this.id).subscribe(function (restaurant) {
            _this.restaurant = restaurant;
        });
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/shared/components/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_4__services_table_service__["a" /* TableService */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.team-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.team-body i {\n  font-size: 0.7em;\n  margin: 0 10px;\n  color: rgba(13, 10, 10, 0.9)\n}\n\n.team-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.team-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.team-add {\n  margin-top: 20px;\n  font-size: 1em;\n}\n\n.team-add i {\n  margin-bottom: 10px;\n  color: rgba(207, 58, 36, 0.8);\n  font-size: 3em;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n\n\n/*Modal Content*/\n.modal-body {\n  text-align: center;\n}\n\n.modal-header {\n  text-align: center;\n}\n.modal-title {\n  font-family: 'Medula One', cursive;\n}\n\n.modal-title i {\n  font-size: 0.6em;\n  margin: 0 10px;\n}\n\n.modal-input {\n  margin: 15px;\n}\n\n.modal-input input, textarea{\n  width: 80%;\n}\n\n.modal-input label {\n  margin: 5px;\n}\n\n.close {\n  float: left;\n  padding: 5px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"team-body\" *ngIf=\"restaurant\">\n  <div class=\"team-head\">\n  <h1>{{restaurant.name}} - Team</h1>\n  </div>\n  <div *ngIf=\"user.role=='Owner'\" class=\"team-body\">\n    <h1><i class=\"fa fa-users\" aria-hidden=\"true\"></i>Managers List<i class=\"fa fa-users\" aria-hidden=\"true\"></i></h1>\n    <div *ngFor=\"let manager of restaurant.workers\" class=\"team-list\">\n      <div *ngIf=\"manager.role=='Manager'\" class=\"team-list\">\n        <h2>{{manager.username}} - {{manager.role}}</h2>\n        <button (click)=\"deleteThis(manager._id)\" *ngIf=\"user._id==restaurant.owner\">Delete</button>\n      </div>\n    </div>\n    <h1><i class=\"fa fa-users\" aria-hidden=\"true\"></i>Waiters List<i class=\"fa fa-users\" aria-hidden=\"true\"></i></h1>\n    <div *ngFor=\"let waiter of restaurant.workers\" class=\"team-list\">\n      <div *ngIf=\"waiter.role=='Waiter'\" class=\"team-list\">\n        <h2>{{waiter.username}} - {{waiter.role}}</h2>\n        <button (click)=\"deleteThis(waiter._id)\" *ngIf=\"user._id==restaurant.owner\">Delete</button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"user.role=='Owner'\" class=\"team-add\">\n    <i data-toggle=\"modal\" data-target=\"#teamModal\" class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n    <p>Add a new team member to your restaurant!</p>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"teamModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>Add Members<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h1>\n        </div>\n        <form (ngSubmit)=\"teamAdd()\" #teamForm=\"ngForm\">\n            <div class=\"modal-body\">\n                <div class=\"modal-input\">\n                  <label for=\"username\">Username</label><br>\n                  <input type=\"text\" name=\"username\" [(ngModel)]=\"worker.username\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"email\">Email</label><br>\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"worker.email\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"password\">Password</label><br>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"worker.password\" required>\n                </div>\n                <div class=\"modal-input\">\n                  <label for=\"role\">Account type</label><br>\n                  <select name=\"role\" [(ngModel)]=\"worker.role\" required>\n                    <option value=\"Manager\">Manager</option>\n                    <option value=\"Waiter\">Waiter</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <button type=\"submit\" [disabled]=\"!teamForm.valid\" data-toggle=\"modal\" data-target=\"#teamModal\">Add</button>\n              <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamComponent = (function () {
    function TeamComponent(_confirmation, router, route, userService, restaurantService, service) {
        var _this = this;
        this._confirmation = _confirmation;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.service = service;
        this.user = {};
        this.id = '';
        this.restaurant = { workers: [] };
        this.worker = { username: '', email: '', password: '', role: '' };
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.restaurantService.getOneRestaurant(_this.id).subscribe(function (restaurant) {
                _this.restaurant = restaurant;
            });
        });
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.fillUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    TeamComponent.prototype.teamAdd = function () {
        var _this = this;
        this.service.success('Member Added!', 'You now have a new member in your team!', {
            timeOut: 2000,
            showProgressBar: true,
            clickToClose: true
        });
        this.userService.teamAdd(this.worker, this.id).subscribe(function (restaurant) {
            _this.restaurant = restaurant;
        });
        this.worker = { username: '', email: '', password: '', role: '' };
    };
    TeamComponent.prototype.deleteThis = function (workId) {
        var _this = this;
        this._confirmation.create('Delete Member', 'Are you sure?', {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            confirmText: 'Delete',
            declineText: 'Close'
        })
            .subscribe(function (ans) {
            if (ans.resolved) {
                _this.service.error('Member Deleted!', 'This member is no longer from your team!', {
                    timeOut: 1500,
                    showProgressBar: true,
                    clickToClose: true
                });
                _this.userService.deleteThis(_this.id, workId).subscribe(function (res) {
                    _this.restaurantService.getOneRestaurant(_this.id).subscribe(function (restaurant) {
                        _this.restaurant = restaurant;
                    });
                });
            }
        });
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/shared/components/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/ticket/ticket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.menu-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.menu-info i {\n  font-size: 0.7em;\n  margin: 0 10px;\n  color: rgba(13, 10, 10, 0.9)\n}\n\n.menu-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.menu-mail {\n  text-align: center;\n}\n\n.menu-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\n.menu-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.menu-buttons i {\n  margin: 0;\n  font-size: 2.5em;\n  color: rgba(207, 58, 36, 0.8);\n  margin: auto 10px;\n}\n\n.menu-buttons button {\n  margin: 10px 0;\n  padding: 0;\n  background-color: white;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/ticket/ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"menu-body\" *ngIf=\"restaurant\">\n  <div class=\"menu-head\">\n  <h1>{{restaurant.name}} - Ticket</h1>\n  </div>\n  <div *ngIf=\"user.role=='Manager' && restaurant\" class=\"menu-info\">\n    <h1>Table: {{ticket.table_name}}</h1>\n    <div class=\"menu-list\" *ngFor=\"let food of ticket.total_order\">\n      <h2>{{food.name}}............{{food.amount}} units...............{{food.price}}€</h2>\n    </div>\n    <h1>Total Cost: {{ticket.total_price}}€</h1>\n  </div>\n</div>\n<div class=\"menu-mail\">\n  <h2>Send to user:</h2>\n  <input type=\"text\" name=\"usermail\" [(ngModel)]=\"usermail\"><br>\n  <button (click)=\"sendTicket()\">Send</button>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/ticket/ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/shared/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ticket_service__ = __webpack_require__("../../../../../src/app/shared/services/ticket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TicketComponent = (function () {
    function TicketComponent(service, _confirmation, router, route, userService, menuService, restaurantService, tableService, ticketService) {
        var _this = this;
        this.service = service;
        this._confirmation = _confirmation;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.menuService = menuService;
        this.restaurantService = restaurantService;
        this.tableService = tableService;
        this.ticketService = ticketService;
        this.restaurant = {};
        this.user = {};
        this.table = {};
        this.orders = [];
        this.ticket = {};
        this.usermail = '';
        this.route.params.subscribe(function (params) {
            _this.tableId = params['id'];
            _this.userService.fillUser().subscribe(function (user) {
                _this.user = user;
                _this.restaurantService.getOneRestaurant(user.works_in).subscribe(function (restaurant) {
                    _this.restaurant = restaurant;
                    _this.ticketService.createTicket(_this.tableId, restaurant._id).subscribe(function (ticket) {
                        _this.ticket = ticket;
                        _this.ticketService.freeOrders(_this.tableId, restaurant._id).subscribe(function (table) {
                            _this.ticketService.updInventory(ticket).subscribe(function (res) {
                                console.log(ticket);
                            });
                        });
                    });
                });
            });
        });
    }
    TicketComponent.prototype.ngOnInit = function () {
    };
    TicketComponent.prototype.sendTicket = function () {
        this.service.success('Sent Mail!', 'Happy customers are so good!', {
            timeOut: 2000,
            showProgressBar: true,
            clickToClose: true
        });
        this.ticketService.sendTicket(this.usermail, this.ticket).subscribe(function (res) {
            console.log('Sent!');
        });
    };
    TicketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ticket',
            template: __webpack_require__("../../../../../src/app/shared/components/ticket/ticket.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/ticket/ticket.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_7__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_8__services_ticket_service__["a" /* TicketService */]])
    ], TicketComponent);
    return TicketComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/total-tickets/total-tickets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-body {\n  text-align: center;\n  color: #0d0a0a;\n}\n\n.menu-head {\n  color: white;\n  background-color: rgba(207, 58, 36, 0.8);\n  padding: 10px;\n  margin-bottom: 30px;\n}\n\n.menu-info i {\n  font-size: 0.7em;\n  margin: 0 10px;\n  color: rgba(13, 10, 10, 0.9)\n}\n\n.menu-head h1 {\n  margin: 0;\n  font-family: 'Medula One', cursive;\n  font-size: 4em;\n}\n\n.menu-hidden-list {\n  font-family: 'Medula One', cursive;\n  margin: 10px;\n}\n\n.menu-list {\n  font-family: 'Medula One', cursive;\n  margin: 10px;\n  border: 1px solid rgba(0,0,0,0.8)\n}\n\n.menu-list h2 {\n  margin: 5px;\n}\n\n.menu-list h3 {\n  margin: 5px;\n}\n\n.menu-detail {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n/* COMMON */\nbutton {\n  background-color: rgba(207, 58, 36, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  margin: 10px;\n}\n\n.menu-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.menu-buttons i {\n  margin: 0;\n  font-size: 2.5em;\n  color: rgba(207, 58, 36, 0.8);\n  margin: auto 10px;\n}\n\n.menu-buttons button {\n  margin: 10px 0;\n  padding: 0;\n  background-color: white;\n}\n\nimg {\n  width: 80%;\n  border: 0px;\n  border-radius: 5px;\n}\n\n.footer-limit {\n  height: 80px;\n}\n\nh1 {\n  font-family: 'Medula One', cursive;\n}\n\nh2 {\n  font-family: 'Medula One', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/total-tickets/total-tickets.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\n<jaspero-confirmations></jaspero-confirmations>\n\n<div class=\"menu-body\" *ngIf=\"restaurant\">\n  <div class=\"menu-head\">\n  <h1>{{restaurant.name}} - Tickets</h1>\n  </div>\n  <div *ngIf=\"user.role=='Owner' && seeList\" class=\"menu-info\">\n    <div class=\"menu-list\" *ngFor=\"let ticket of ticketArray\">\n      <div (click)=\"showTicket(ticket._id)\">\n        <h2>Date: {{ticket.createdAt}}</h2>\n        <div class=\"menu-detail\">\n          <h3>Table: {{ticket.table_name}}</h3>\n          <h3>Total_price: {{ticket.total_price}}€</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"user.role=='Owner' && seeTicket\" class=\"menu-info\">\n    <div (click)=\"inverse()\">\n      <h1>Table: {{oneTicket.table_name}}</h1>\n      <div class=\"menu-hidden-list\" *ngFor=\"let food of oneTicket.total_order\">\n        <h2>{{food.name}}............{{food.amount}} units...............{{food.price}}€</h2>\n      </div>\n      <h1>Total Cost: {{oneTicket.total_price}}€</h1>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-limit\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/total-tickets/total-tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalTicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/shared/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__ = __webpack_require__("../../../../@jaspero/ng-confirmations/ng-confirmations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ticket_service__ = __webpack_require__("../../../../../src/app/shared/services/ticket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TotalTicketsComponent = (function () {
    function TotalTicketsComponent(service, _confirmation, router, route, userService, menuService, restaurantService, tableService, ticketService) {
        var _this = this;
        this.service = service;
        this._confirmation = _confirmation;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.menuService = menuService;
        this.restaurantService = restaurantService;
        this.tableService = tableService;
        this.ticketService = ticketService;
        this.user = {};
        this.ticketArray = [];
        this.restId = '';
        this.restaurant = {};
        this.oneTicket = {};
        this.seeList = true;
        this.seeTicket = false;
        this.route.params.subscribe(function (params) {
            _this.restId = params['id'];
            _this.userService.fillUser().subscribe(function (user) {
                _this.user = user;
                _this.ticketService.getAll(_this.restId).subscribe(function (tickets) {
                    _this.ticketArray = tickets.map(function (e) {
                        e.createdAt = e.createdAt.slice(0, e.createdAt.indexOf('T'));
                        return e;
                    });
                    _this.restaurantService.getOneRestaurant(_this.restId).subscribe(function (restaurant) {
                        _this.restaurant = restaurant;
                    });
                });
            });
        });
    }
    TotalTicketsComponent.prototype.ngOnInit = function () {
    };
    TotalTicketsComponent.prototype.showTicket = function (ticketId) {
        this.oneTicket = this.ticketArray.filter(function (e) { return e._id == ticketId; })[0];
        this.seeList = !this.seeList;
        this.seeTicket = !this.seeTicket;
    };
    TotalTicketsComponent.prototype.inverse = function () {
        this.seeList = !this.seeList;
        this.seeTicket = !this.seeTicket;
    };
    TotalTicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-total-tickets',
            template: __webpack_require__("../../../../../src/app/shared/components/total-tickets/total-tickets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/total-tickets/total-tickets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_5__jaspero_ng_confirmations__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__services_restaurant_service__["a" /* RestaurantService */],
            __WEBPACK_IMPORTED_MODULE_7__services_table_service__["a" /* TableService */],
            __WEBPACK_IMPORTED_MODULE_8__services_ticket_service__["a" /* TicketService */]])
    ], TotalTicketsComponent);
    return TotalTicketsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_main_main_component__ = __webpack_require__("../../../../../src/app/shared/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_lobby_lobby_component__ = __webpack_require__("../../../../../src/app/shared/components/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/shared/components/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_edit_restaurant_edit_restaurant_component__ = __webpack_require__("../../../../../src/app/shared/components/edit-restaurant/edit-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_products_products_component__ = __webpack_require__("../../../../../src/app/shared/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/shared/components/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_team_team_component__ = __webpack_require__("../../../../../src/app/shared/components/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_order_order_component__ = __webpack_require__("../../../../../src/app/shared/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ticket_ticket_component__ = __webpack_require__("../../../../../src/app/shared/components/ticket/ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_total_tickets_total_tickets_component__ = __webpack_require__("../../../../../src/app/shared/components/total-tickets/total-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_data_data_component__ = __webpack_require__("../../../../../src/app/shared/components/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_data_lobby_data_lobby_component__ = __webpack_require__("../../../../../src/app/shared/components/data-lobby/data-lobby.component.ts");














var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_0__components_main_main_component__["a" /* MainComponent */] },
    { path: 'lobby', component: __WEBPACK_IMPORTED_MODULE_1__components_lobby_lobby_component__["a" /* LobbyComponent */] },
    { path: 'restaurant/:name', component: __WEBPACK_IMPORTED_MODULE_2__components_restaurant_restaurant_component__["a" /* RestaurantComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_edit_restaurant_edit_restaurant_component__["a" /* EditRestaurantComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_4__components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_edit_product_edit_product_component__["a" /* EditProductComponent */] },
    { path: 'menu/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'order/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_order_order_component__["a" /* OrderComponent */] },
    { path: 'team/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_team_team_component__["a" /* TeamComponent */] },
    { path: 'tables/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_table_table_component__["a" /* TableComponent */] },
    { path: 'ticket/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_ticket_ticket_component__["a" /* TicketComponent */] },
    { path: 'total/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_total_tickets_total_tickets_component__["a" /* TotalTicketsComponent */] },
    { path: 'data-lobby', component: __WEBPACK_IMPORTED_MODULE_13__components_data_lobby_data_lobby_component__["a" /* DataLobbyComponent */] },
    { path: 'data/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_data_data_component__["a" /* DataComponent */] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/auth";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.http.get(this.baseUrl + "/loggedin", this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userSignUp = function (user) {
        if (user.role == 'Owner') {
            return this.http.post(this.baseUrl + "/owner", JSON.stringify(user), this.options);
        }
        if (user.role == 'Customer') {
            return this.http.post(this.baseUrl + "/signup", JSON.stringify(user), this.options);
        }
    };
    AuthService.prototype.userLogin = function (user) {
        return this.http.post(this.baseUrl + "/login", JSON.stringify(user), this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userLogout = function () {
        return this.http.get(this.baseUrl + "/logout", this.options);
    };
    AuthService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/restaurant";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    MenuService.prototype.deleteThis = function (resId, prodId) {
        return this.http.post(this.baseUrl + "/editmenu", { resId: resId, prodId: prodId }, this.options);
    };
    MenuService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/product";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.baseUrl + "/list", this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getOneProduct = function (id) {
        return this.http.get(this.baseUrl + "/one/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.productDelete = function (id) {
        return this.http.post(this.baseUrl + "/delete", { id: id }, this.options);
    };
    ProductService.prototype.addProdToMenu = function (id, restaurant) {
        return this.http.post(this.baseUrl + "/tomenu", { resId: restaurant, prodId: id }, this.options);
    };
    ProductService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/restaurant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantService = (function () {
    function RestaurantService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/restaurant";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    RestaurantService.prototype.getRestaurants = function () {
        return this.http.get(this.baseUrl + "/all", this.options)
            .map(function (res) { return res.json(); });
    };
    RestaurantService.prototype.getOneRestaurant = function (id) {
        return this.http.get(this.baseUrl + "/info/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    RestaurantService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    RestaurantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], RestaurantService);
    return RestaurantService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableService = (function () {
    function TableService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/table";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    TableService.prototype.newTable = function (table, resId) {
        return this.http.post(this.baseUrl + "/new/" + resId, JSON.stringify(table), this.options)
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.tableDelete = function (tableId, resId) {
        return this.http.post(this.baseUrl + "/delete/" + resId + "/" + tableId, {}, this.options)
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.getTable = function (id) {
        return this.http.get(this.baseUrl + "/one/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.plusThis = function (tableId, prodId) {
        return this.http.post(this.baseUrl + "/add/" + prodId + "/" + tableId, {}, this.options)
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.minusThis = function (tableId, prodId) {
        return this.http.post(this.baseUrl + "/quit/" + prodId + "/" + tableId, {}, this.options)
            .map(function (res) { return res.json(); });
    };
    TableService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    TableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/ticket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/ticket";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    TicketService.prototype.createTicket = function (tableId, restId) {
        return this.http.post(this.baseUrl + "/create/" + tableId + "/" + restId, {}, this.options)
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.freeOrders = function (tableId, restId) {
        return this.http.post(this.baseUrl + "/free/" + tableId + "/" + restId, {}, this.options)
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.updInventory = function (ticket) {
        return this.http.post(this.baseUrl + "/update", JSON.stringify(ticket), this.options)
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.sendTicket = function (usermail, ticket) {
        return this.http.post(this.baseUrl + "/mail/" + usermail, JSON.stringify(ticket), this.options)
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.getAll = function (restId) {
        return this.http.get(this.baseUrl + "/all/" + restId, this.options)
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    TicketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/auth";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    UserService.prototype.fillUser = function () {
        return this.http.get(this.baseUrl + "/userdata", this.options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.teamAdd = function (worker, resId) {
        return this.http.post(this.baseUrl + "/worker/" + resId, JSON.stringify(worker), this.options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteThis = function (resId, workId) {
        return this.http.post(this.baseUrl + "/deleteworker/" + resId + "/" + workId, {}, this.options);
    };
    UserService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    BASE_URL: "http://localhost:3000"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map