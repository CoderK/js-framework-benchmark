"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var startTime;
var lastMeasure;
var startMeasure = function (name) {
    startTime = performance.now();
    lastMeasure = name;
};
var stopMeasure = function () {
    var last = lastMeasure;
    if (lastMeasure) {
        window.setTimeout(function () {
            lastMeasure = null;
            var stop = performance.now();
            var duration = 0;
            console.log(last + " took " + (stop - startTime));
        }, 0);
    }
};
var App = (function () {
    function App() {
        this.data = [];
        this.selected = undefined;
        this.id = 1;
        this.backup = undefined;
    }
    App.prototype.buildData = function (count) {
        if (count === void 0) { count = 1000; }
        var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
        var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
        var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
        var data = [];
        for (var i = 0; i < count; i++) {
            data.push({ id: this.id, label: adjectives[this._random(adjectives.length)] + " " + colours[this._random(colours.length)] + " " + nouns[this._random(nouns.length)] });
            this.id++;
        }
        return data;
    };
    App.prototype._random = function (max) {
        return Math.round(Math.random() * 1000) % max;
    };
    App.prototype.itemById = function (index, item) {
        return item.id;
    };
    App.prototype.select = function (item, event) {
        startMeasure("select");
        event.preventDefault();
        this.selected = item.id;
    };
    App.prototype.delete = function (item, event) {
        event.preventDefault();
        startMeasure("delete");
        for (var i = 0, l = this.data.length; i < l; i++) {
            if (this.data[i].id === item.id) {
                this.data.splice(i, 1);
                break;
            }
        }
    };
    App.prototype.run = function (event) {
        startMeasure("run");
        this.data = this.buildData();
    };
    App.prototype.add = function (event) {
        startMeasure("add");
        this.data = this.data.concat(this.buildData(1000));
    };
    App.prototype.update = function (event) {
        startMeasure("update");
        for (var i = 0; i < this.data.length; i += 10) {
            this.data[i].label += ' !!!';
        }
    };
    App.prototype.runLots = function () {
        startMeasure("runLots");
        this.data = this.buildData(10000);
        this.selected = undefined;
    };
    App.prototype.clear = function () {
        startMeasure("clear");
        this.data = [];
        this.selected = undefined;
    };
    App.prototype.swapRows = function () {
        startMeasure("swapRows");
        if (this.data.length > 10) {
            var a = this.data[4];
            this.data[4] = this.data[9];
            this.data[9] = a;
        }
    };
    App.prototype.ngAfterViewChecked = function () {
        stopMeasure();
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div class=\"container\">\n\t\t<div class=\"jumbotron\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<h1>Angular v2.0.0</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n                    <div class=\"col-sm-6 smallpad\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\" id=\"run\" (click)=\"run()\" ref=\"text\">Create 1,000 rows</button>\n                    </div>\n                    <div class=\"col-sm-6 smallpad\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\" id=\"runlots\" (click)=\"runLots()\">Create 10,000 rows</button>\n                    </div>\n                    <div class=\"col-sm-6 smallpad\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\" id=\"add\" (click)=\"add()\" ref=\"text\">Append 1,000 rows</button>\n                    </div>\n                    <div class=\"col-sm-6 smallpad\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\" id=\"update\" (click)=\"update()\">Update every 10th row</button>\n                    </div>\n                    <div class=\"col-sm-6 smallpad\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\" id=\"clear\" (click)=\"clear()\">Clear</button>\n                    </div>\n                    <div class=\"col-sm-6 smallpad\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\" id=\"swaprows\" (click)=\"swapRows()\">Swap Rows</button>\n                    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<table class=\"table table-hover table-striped test-data\">\n\t\t    <tbody>\n                <tr [class.danger]=\"item.id === selected\" *ngFor=\"let item of data trackBy itemById\">\n                    <td class=\"col-md-1\">{{item.id}}</td>\n                    <td class=\"col-md-4\">\n                        <a href=\"#\" (click)=\"select(item, $event)\">{{item.label}}</a>\n                    </td>\n                    <td class=\"col-md-1\"><a href=\"#\" (click)=\"delete(item, $event)\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></a></td>\n                    <td class=\"col-md-6\"></td>\n                </tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<span class=\"preloadicon glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                App
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map