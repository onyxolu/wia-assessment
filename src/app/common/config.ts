import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
// import {  Http } from "@angular/common/http";
// import { Observable } from "rxjs/Rx";

@Injectable()

export class WiaConfig {

    private authorizationKey: string = environment.API_KEY
    private base_url = environment.API_BASE_URL

    public handleDataExtraction(response: any): any {
        return response.json();
    }

    public getKey(): string {
        return this.authorizationKey
    }
    
    public getBaseUrl(): string {
        return this.base_url
    }

    // handleError(error: Response) {
    //     console.error(error);
    //     return Observable.throw(error);
    // }
    
    // handleErrorWithBooleanReturnValue(error: Response) {
    //     return Observable.of(false);
    // }
}