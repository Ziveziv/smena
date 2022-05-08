import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Element} from './models/element';

@Injectable()
export class ElementService {

    constructor(private http:Http) {
    }

    getElements():Promise<Element[]> {
        return this.http.get('data/names.560.json')
            .toPromise()
            .then(response => {

                let elements:Element[] = [];

                let myDict:Dictionary = response.json();
                let keys:Array<string> = Object.keys(myDict);

                for (let key in keys) {
                    let element = new Element();
                    element.id = +key;
                    element.name = myDict[key];
                    elements.push(element);
                }

                return elements;
            })
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

interface Dictionary {
    [ id:string ]:string
}
