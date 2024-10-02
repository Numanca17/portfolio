import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
 <>
 <h3>Numan's Portfolio Page</h3>
 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
</>
 
 );
}
