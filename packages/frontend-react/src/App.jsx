import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Order from "./Order";
import coffeeImage from "./assets/images/coffee.png";
import Product from "./Product.jsx";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import Map from "./Map.jsx";
function Home() {
  const [introRef, introInView] = useInView({
    threshold: 0.1,
  });

  const [navRef, navInView] = useInView({
    threshold: 0.1,
  });

  const [mainRef, mainInView] = useInView({
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div id="wrapper">
      <div
        id="intro"
        ref={introRef}
        className={`fade-in-scroll ${introInView ? "visible" : ""}`}
      >
        <h1 className="welcome">Welcome to</h1>
        <header id="header" className="header-logo">
          <Link to="/" className="logo">
            BAO HUNG COFFEE
          </Link>
        </header>
        <p>A Family Business has been serving community for 25+ years</p>
      </div>

      <br />
      <Navbar ref={navRef} 
      className={`fade-in-scroll ${navInView ? 'visible' : ''}`}>

      </Navbar>

      <div
        id="main"
        ref={mainRef}
        className={`fade-in-scroll ${mainInView ? "visible" : ""}`}
      >
        <article className="post featured">
          <header className="major">
            <span className="date">April 25, 1999</span>
            <h2>
              Thành Lập Tại
              <br />
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

      <Map ref={mapRef} className = {`fade-in-scroll ${mapInView ? 'visible' : ''}`} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
