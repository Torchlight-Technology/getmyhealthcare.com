import { h } from 'preact';
import { Link } from 'preact-router/match';

//TODO: Actual footer, Google Tag Manager, Dynamic Year
const Footer = () => (
	<div class="footer">
	   <p>&copy; GetMyHealthcare 2019. All rights reserved.</p>
	   <nav>
	     <ul>
	       <li><Link href="/privacy/">Privacy Policy</Link></li>
	       <li><Link href="/terms/">Terms of Use</Link></li>
	       <li><Link href="/about/">About Us</Link></li>
	     </ul>
	   </nav>
	 </div>
);

export default Footer;
