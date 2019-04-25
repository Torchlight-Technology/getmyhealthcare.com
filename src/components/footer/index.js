import { h } from 'preact';
import { Link } from 'preact-router/match';

//TODO: Actual footer, Google Tag Manager, Dynamic Year
const Footer = () => (
	<div class="footer">
	   <p>© GetMyHealthcare 2019. All rights reserved.</p>
	   <nav>
	     <ul>
	       <li>Privacy Policy</li>
	       <li>Terms of Use</li>
	       <li>About Us</li>
	     </ul>
	   </nav> 
	 </div>
);

export default Footer;
