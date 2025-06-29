import Product1 from './assets/images/product1.jpg'
import Product2 from './assets/images/product2.jpg'
import Product3 from './assets/images/product3.jpg'
import Product4 from './assets/images/product4.jpg'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import './App.css'
function Product () {
    const [introRef, introInView] = useInView({
      threshold: 0.1
    });
    
    const [navRef, navInView] = useInView({
      threshold: 0.1
    });
    
    const [mainRef, mainInView] = useInView({
      threshold: 0.1
    });

    const products = [
      { imgSrc: Product1, title: "Product 1" },
      { imgSrc: Product2, title: "Product 2" },
      { imgSrc: Product3, title: "Product 3" }
    ,{ imgSrc: Product4, title: "Product 4" }
    ];
    
    return (
    <div id='wrapper' className = "fade-in">
        <div 
          id="intro"
          ref={introRef}
          className={`fade-in-scroll ${introInView ? 'visible' : ''}`}
        >
          <h1 className ="welcome">Products</h1>
          <header id="header" className ="header-logo">
          <Link to="/" className="logo">
            BAO HUNG COFFEE
          </Link>
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li className='active'>
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
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <h3>{product.title}</h3>
                            <img src={product.imgSrc} className="product_image" alt={product.title} />
                            <Link to="/order" className="button">Order Now</Link>
                        </div>
                    ))}
                </section>
            </div>

       
        
    
    </div>
       
    )
}
export default Product