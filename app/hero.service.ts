import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Http,Response, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HeroService {
    result: Object;
    combined: any;
    data:string[];
    error: Object;
    http: Http;
    contract: any;
    customer: any;
    constructor( http: Http)
    {
      this.http = http;
    }
    getHeroes() {
       return Promise.resolve(HEROES);
  }
    loadFriendsSuccessFully(){
          return  this.http.get('http://localhost:3000/App/friends.json').map((res: Response) => res.json());
    }
    getGitRepo(){
        return this.http.get('http://api.github.com/users/robconery').map((res :Response)=> res.json());
    }
     
}