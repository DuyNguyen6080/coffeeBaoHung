import { Routes, Route } from 'react-router-dom'
import './App.css'
import Order from './Order'
import coffeeImage from './assets/images/coffee.png'
import Product from './Product.jsx'
import { useInView } from 'react-intersection-observer'

function Home() {
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
    threshold: 0.1
  });
 
  return (
    <div id='wrapper' className="fade-in">
      <div 
        id="intro"
        ref={introRef}
        className={`fade-in-scroll ${introInView ? 'visible' : ''}`}
      >
        <h1 className ="welcome">Welcome to</h1>
        <header id="header" className ="header-logo">
          <a href="/" className="logo">
            BAO HUNG COFFEE
          </a>
        </header>
        <p>
          A Family Business has been serving community for 25+ years
        </p>
      </div>

      <br/>
      <nav 
        id="nav"
        ref={navRef}
        className={`fade-in-scroll ${navInView ? 'visible' : ''}`}
      >
        <ul className="links">
          <li className="active">
            <a href="/  ">Home</a>
          </li>
          <li>
            <a href="/order">Order</a>
          </li>
          <li>
            <a href="/product">Product</a>
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
        <article className="post featured">
          <header className="major">
            <span className="date">April 25, 1999</span>
            <h2>
              Thành Lập Tại<br />
              Buôn Mê Thuột
            </h2>
            <div className="image main">
              <img src={coffeeImage} alt="Coffee Shop" />
            </div>
            <p>
              Aenean ornare velit lacus varius enim ullamcorper proin aliquam
              <br />
              facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
              <br />
              amet nullam sed etiam veroeros.
            </p>
          </header>
        </article>
      </div>

      <div 
        id="map-section"
        ref={mapRef}
        className={`fade-in-scroll ${mapInView ? 'visible' : ''}`}
      >
        <article className="post">
          <header className="major">
            <h2 className="map-title">Find Us</h2>
            
          </header>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.0357979134737!2d108.5037155!3d11.7625291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31713e8c3a222d3f%3A0x2d9ed0ba9ace1d08!2zQ8OgIFBow6ogQuG6o28gSMawbmc!5e0!3m2!1sen!2sus!4v1750572759489!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bao Hung Coffee Location"
            ></iframe>
           </div>
        </article>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/product" element={<Product />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  )
}

export default App
