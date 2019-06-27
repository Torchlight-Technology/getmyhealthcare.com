import { h } from 'preact';
import { Link } from 'preact-router/match';

const NavBar = () => (
  <nav>
    <ul class="desktop-nav">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/#how-it-works">How It Works</Link></li>
      <li><Link href="/about/">About Us</Link></li>
      <li><Link href="/#tips">Tips</Link></li>
    </ul>
    <ul class="mobile-nav">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/#how-it-works">How It Works</Link></li>
      <li><Link href="/about/">About Us</Link></li>
      <li><Link href="/#tips">Tips</Link></li>
    </ul>
  </nav>
);

export default NavBar;
