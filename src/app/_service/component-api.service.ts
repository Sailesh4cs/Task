

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '@environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ComponentApiService {
    private updatelist = new BehaviorSubject('update');
    currentValue = this.updatelist.asObservable();


    constructor(private httpCLient: HttpClient) { }
    public async getStudent() {
        return this.httpCLient.get("http://localhost:54243/api/student").toPromise();
    }
}
