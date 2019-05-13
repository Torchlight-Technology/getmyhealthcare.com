import { h } from 'preact';
import { Link } from 'preact-router/match';
import NavBar from '../navbar';
import ToggleButton from '../toggle-button';

const Header = () => (
	<header class="header">
		<Link href="/" class="logo"><img src="/assets/getmyhealthcare-logo.svg" /></Link>
		<ToggleButton />
		<NavBar />
	</header>
);

export default Header;
