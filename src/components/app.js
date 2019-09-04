import { h, Component } from 'preact';
import Login from '../routes/login';
import Logout from '../routes/logout';
import '../assets/css/bootstrap.css';
import { Router, route } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import { isAuthenticated } from './auth';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		if (!isAuthenticated()){
			this.currentUrl = '/login';
			route('/login', true);
			return;
		}
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class="container">
				<Header />
				<Router onChange={this.handleRoute}>
					<Login path="/login" />
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Logout path="/logout" />
				</Router>
			</div>
		);
	}
}
