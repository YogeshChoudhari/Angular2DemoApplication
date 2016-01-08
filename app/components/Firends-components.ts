import {Component} from 'angular2/core';
import {HeroService} from '../hero.service';
@Component({
  selector: 'firend-detail',
  template: `
 <h1>Making Http Requests</h1>
 <div *ngIf="result">
<div class="alert alert-success" role="alert">
    List of just friends loaded successfully
</div>
<div *ngFor="#friend of result.friends">
    {{friend}}
</div>
</div>
`,
inputs: ['result']
})
export class FirendsComponent {
    public user: {};
      public result = {friends:[]};
    constructor(private _heroService: HeroService) { }
}