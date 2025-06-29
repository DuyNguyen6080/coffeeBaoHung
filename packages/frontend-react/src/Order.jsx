import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import './App.css'

function Order() {
  const [introRef, introInView] = useInView({
    threshold: 0.1
  });
  
  const [navRef, navInView] = useInView({
    threshold: 0.1
  });
  
  const [mainRef, mainInView] = useInView({
    threshold: 0.1
  });

  return (
    <div id='wrapper' className="fade-in">
      <div 
        id="intro"
        ref={introRef}
        className={`fade-in-scroll ${introInView ? 'visible' : ''}`}
      >
        <h1 className="welcome">Place Your Order</h1>
        <header id="header" className="header-logo">
          <Link to="/" className="logo">
            BAO HUNG COFFEE
          </Link>
        </header>
        <p>
          Order your favorite coffee and beverages online
        </p>
      </div>

      <br/>
      <nav 
        id="nav" 
        ref={navRef} 
        className={`fade-in-scroll ${navInView ? 'visible' : ''}`}
      >
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className='active'>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-brands fa-facebook-f">
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

      <div 
        id="main" 
        ref={mainRef} 
        className={`fade-in-scroll ${mainInView ? 'visible' : ''}`}
      >
        <section className="posts">
          <article>
            <header>
              <h2>Online Ordering Coming Soon</h2>
            </header>
            <p>
              We're working on bringing you the best online ordering experience. 
              For now, please visit our store or call us to place your order.
            </p>
            <ul className="actions">
              <li>
                <Link to="/product" className="button">View Our Menu</Link>
              </li>
              <li>
                <a href="tel:+1234567890" className="button">Call Us</a>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Order