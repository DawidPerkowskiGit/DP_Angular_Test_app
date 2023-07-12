import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { enviroment} from "../../app/enviroments/enviroment"

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app_config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint: enviroment.apiEndpoint
}