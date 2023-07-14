import { Injectable, Inject } from '@angular/core';
import { RouteConfigToken } from '../rooms/services/routeConfig.spec';
import { RouteConfig } from '../rooms/services/routeConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log('ConfigService constructor');
    console.log(this.configToken);
    
    
  }
}
