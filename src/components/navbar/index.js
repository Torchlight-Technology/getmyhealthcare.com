import { h } from 'preact';
import { Link } from 'preact-router/match';

const NavBar = () => (
  <nav>
    <ul class="desktop-nav">
      <Link href="/"><li>Home</li></Link>
      <Link href="/#how-it-works"><li>How It Works</li></Link>
      <Link href="/about/"><li>About Us</li></Link>
      <Link href="/#testimonials"><li>Testimonials</li></Link>
    </ul>
    <ul class="mobile-nav">
      <Link href="/"><li>Home</li></Link>
      <Link href="/#how-it-works"><li>How It Works</li></Link>
      <Link href="/about/"><li>About Us</li></Link>
      <Link href="/#testimonials"><li>Testimonials</li></Link>
    </ul>
  </nav>          
);

export default NavBar;