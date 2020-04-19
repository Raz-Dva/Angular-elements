import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

export class ColorsGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    return confirm('In this URL I use Guard CanActivate. Do you really want to go Products?')
  }

  constructor() { }
}
