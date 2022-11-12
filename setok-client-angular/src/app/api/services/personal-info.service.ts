import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfiguration } from "../api-configuration";
import { BaseService } from "../base-service";

@Injectable({
    providedIn: 'root',
})
export class PersonalInfoService extends BaseService {
    constructor(
        config: ApiConfiguration,
        http: HttpClient
    ) {
        super(config, http);
    }

    static readonly personalInfoGetPath = '/PersonalInfo';

    
}