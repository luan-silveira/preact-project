import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import HomePath from '../routes/home';
import Profile from '../routes/profile';
function Home() {
	return (
		<div id="app" class="container">
			<Header />
			<Router onChange={this.handleRoute}>
				<HomePath exact path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
			<Footer />
		</div>
	);
}

export default Home;