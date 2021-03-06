import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';

@Component({
	selector: 'kir-app',
	providers: [],
	templateUrl: 'app/kir-app.html',
	directives: [ROUTER_DIRECTIVES],
	pipes: []
})

@RouteConfig([
	new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true}),
	new Route({ path: '/about', component: About, name: 'About'})
])

export class KirApp {
	constructor() {

	}
}
