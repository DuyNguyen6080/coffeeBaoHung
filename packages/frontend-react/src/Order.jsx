import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import './App.css'
import Navbar from './Navbar';
import Map from './Map';
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
  const [mapRef, mapInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div id='wrapper' >
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
      <Navbar ref={navRef} 
      className={`fade-in-scroll ${navInView ? 'visible' : ''}`}>
        
      </Navbar>

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
                <a href="tel:+848885050249" className="button">Call Us</a>
              </li>
            </ul>
          </article>
        </section>
      </div>
      <Map ref={mapRef} className={`fade-in-scroll ${mapInView ? "visible" : ""}`} />
    </div>
  )
}

export default Order