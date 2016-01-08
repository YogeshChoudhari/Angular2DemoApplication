
import {Component} from 'angular2/core';
import {Hero} from './hero';
import {GitUser} from './gituser';
import {HeroDetailComponent} from './hero-detail.component';
import {FirendsComponent} from './components/Firends-components';

import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
</ul> 
 <my-hero-detail [hero]="selectedHero"></my-hero-detail> 

 <h1>Making Http Requests</h1>
<div class="alert alert-success" role="alert">
    List of just friends loaded successfully
</div>
<div *ngFor="#friend of result.friends">
    {{friend}}
</div>
<div> 
 <h1>Making Http API Requests the </h1>
  <span class="badge">User ID  : {{user.id}}</span>

  <span class ="badge">Name: {{user.name}}</span>
  </div>
  <img src={{user.avatar_url}} title={{user.name}}/>
 `,
styles:[`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
`],
directives: [HeroDetailComponent,FirendsComponent],
providers: [HeroService]

})
export class AppComponent implements OnInit{ 
    public selectedHero: Hero;
    public heroes: Hero[];
    public result = {friends:[]};
    public user :{};

        //result: Object;
    
    constructor(private _heroService: HeroService  ) { 
      //this.getFriends();
        this.user ={};
    }
    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    ngOnInit() {
    this.getHeroes();
    this.getFriends();
    this.getGitRepo();
  }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
       // this._heroService.getHeroes().subscribe(res=>this.heroes =res);
   }
   
     getFriends(){
           this._heroService.loadFriendsSuccessFully().subscribe(res => this.result = res);
  }
  
   getGitRepo(){
    this.user ={};
          this._heroService.getGitRepo().subscribe(res => this.user = res);
     }
}

 