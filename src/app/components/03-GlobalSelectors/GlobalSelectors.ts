/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

var styles = require('./GlobalSelectors.css');

@Component({
    'selector': 'global-selectors',
    'template': `<div class="${ styles.root }">
        <p class="text">Global Selectors</p>
      </div>`
})
export class GlobalSelectors {

}
