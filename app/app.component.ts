import { Component, OnInit } from '@angular/core';
import { ElementService } from './element.service';
import { Element } from './models/element';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ElementService]
})
export class AppComponent implements OnInit {

    // how do I even
    elements: Element[];

    constructor(
        private elementService: ElementService
    ) { }

    ngOnInit() {
        this.elementService.getElements()
            .then(result => this.elements = result);

    }

}
