import { Link } from 'preact-router/match';
import style from './style';
import { isAuthenticated } from '../auth';

const Header = () => isAuthenticated() ? (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
			<Link activeClassName={style.active} href="/logout">Sair</Link>
		</nav>
	</header>
) : null;

export default Header;