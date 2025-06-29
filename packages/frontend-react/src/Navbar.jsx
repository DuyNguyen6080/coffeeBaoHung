import { Link, useLocation } from 'react-router-dom';
import { forwardRef, useState, useEffect } from 'react';
import "./App.css";

const Navbar = forwardRef(({ className }, ref) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');

    // Update active link based on current location
    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setActiveLink('home');
        } else if (path === '/order') {
            setActiveLink('order');
        } else if (path === '/product') {
            setActiveLink('product');
        }
    }, [location]);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
         <nav 
        id="nav" 
        ref={ref} 
        className={className}
      >
      <ul className="links">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => handleLinkClick('home')}>Home</Link>
        </li>
        <li className={activeLink === 'order' ? 'active' : ''}>
          <Link to="/order" onClick={() => handleLinkClick('order')}>Order</Link>
        </li>
        <li className={activeLink === 'product' ? 'active' : ''}>
          <Link to="/product" onClick={() => handleLinkClick('product')}>Product</Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100090739546074" className="icon brands fa-brands fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-brands fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
    )
});

export default Navbar;