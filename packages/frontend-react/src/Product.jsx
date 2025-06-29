import Product1 from "./assets/images/product1.jpg";
import Product2 from "./assets/images/product2.jpg";
import Product3 from "./assets/images/product3.jpg";
import Product4 from "./assets/images/product4.jpg";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Map from "./Map";
import "./App.css";
function Product() {
  const [introRef, introInView] = useInView({
    threshold: 0.1,
  });

  const [navRef, navInView] = useInView({
    threshold: 0.1,
  });

  const [mainRef, mainInView] = useInView({
    threshold: 0.01,
  });
  const [mapRef, mapInView] = useInView({
    threshold: 0.1,
  });

  const products = [
    { imgSrc: Product1, title: "Product 1" },
    { imgSrc: Product2, title: "Product 2" },
    { imgSrc: Product3, title: "Product 3" },
    { imgSrc: Product4, title: "Product 4" },
  ];

  return (
    <div id="wrapper">
      <div
        id="intro"
        ref={introRef}
        className={`fade-in-scroll ${introInView ? "visible" : ""}`}
      >
        <h1 className="welcome">Products</h1>
        <header id="header" className="header-logo">
          <Link to="/" className="logo">
            BAO HUNG COFFEE
          </Link>
        </header>
        <p>A Family Business has been serving community for 25+ years</p>
      </div>

      <br />
      <Navbar
        ref={navRef}
        className={`fade-in-scroll ${navInView ? "visible" : ""}`}
      ></Navbar>

      <div
        id="main"
        ref={mainRef}
        className={`fade-in-scroll ${mainInView ? "visible" : ""}`}
      >
        <section className="posts">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.title}</h3>
              <img
                src={product.imgSrc}
                className="image fit"
                alt={product.title}
              />
              <Link to="/order" className="button">
                Order Now
              </Link>
            </div>
          ))}
        </section>
      </div>
      <Map ref={mapRef} className={`fade-in-scroll ${mapInView ? "visible" : ""}`} />
    </div>
    
  );
}
export default Product;
