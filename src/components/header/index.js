import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header class="header">
		<Link href="/"><img src="/assets/getmyhealthcare-logo.svg" /></Link>
		<nav>
			<ul>
				<li><Link href="/">Home</Link></li>
			</ul>
		</nav>
	</header>
);

export default Header;
