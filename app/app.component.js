System.register(['angular2/core', './hero-detail.component', './components/Firends-components', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, Firends_components_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (Firends_components_1_1) {
                Firends_components_1 = Firends_components_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //result: Object;
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.result = { friends: [] };
                    //this.getFriends();
                    this.user = {};
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                    this.getFriends();
                    this.getGitRepo();
                };
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                    // this._heroService.getHeroes().subscribe(res=>this.heroes =res);
                };
                AppComponent.prototype.getFriends = function () {
                    var _this = this;
                    this._heroService.loadFriendsSuccessFully().subscribe(function (res) { return _this.result = res; });
                };
                AppComponent.prototype.getGitRepo = function () {
                    var _this = this;
                    this.user = {};
                    this._heroService.getGitRepo().subscribe(function (res) { return _this.user = res; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"#hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n  <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n</li>\n</ul> \n <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail> \n\n <h1>Making Http Requests</h1>\n<div class=\"alert alert-success\" role=\"alert\">\n    List of just friends loaded successfully\n</div>\n<div *ngFor=\"#friend of result.friends\">\n    {{friend}}\n</div>\n<div> \n <h1>Making Http API Requests the </h1>\n  <span class=\"badge\">User ID  : {{user.id}}</span>\n\n  <span class =\"badge\">Name: {{user.name}}</span>\n  </div>\n  <img src={{user.avatar_url}} title={{user.name}}/>\n ",
                        styles: ["\n  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n  .heroes .badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n  }\n  .selected { background-color: #EEE; color: #369; }\n"],
                        directives: [hero_detail_component_1.HeroDetailComponent, Firends_components_1.FirendsComponent],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map