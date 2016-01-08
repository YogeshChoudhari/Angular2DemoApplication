System.register(['angular2/core', '../hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1;
    var FirendsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            FirendsComponent = (function () {
                function FirendsComponent(_heroService) {
                    this._heroService = _heroService;
                    this.result = { friends: [] };
                }
                FirendsComponent = __decorate([
                    core_1.Component({
                        selector: 'firend-detail',
                        template: "\n <h1>Making Http Requests</h1>\n <div *ngIf=\"result\">\n<div class=\"alert alert-success\" role=\"alert\">\n    List of just friends loaded successfully\n</div>\n<div *ngFor=\"#friend of result.friends\">\n    {{friend}}\n</div>\n</div>\n",
                        inputs: ['result']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], FirendsComponent);
                return FirendsComponent;
            })();
            exports_1("FirendsComponent", FirendsComponent);
        }
    }
});
//# sourceMappingURL=Firends-components.js.map