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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var element_1 = require('./models/element');
var ElementService = (function () {
    function ElementService(http) {
        this.http = http;
    }
    ElementService.prototype.getElements = function () {
        return this.http.get('data/names.560.json')
            .toPromise()
            .then(function (response) {
            var elements = [];
            var myDict = response.json();
            var keys = Object.keys(myDict);
            for (var key in keys) {
                var element = new element_1.Element();
                element.id = +key;
                element.name = myDict[key];
                elements.push(element);
            }
            return elements;
        })
            .catch(this.handleError);
    };
    ElementService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ElementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ElementService);
    return ElementService;
}());
exports.ElementService = ElementService;
//# sourceMappingURL=element.service.js.map