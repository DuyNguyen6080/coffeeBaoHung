import image1 from '../images/product1.jpg'
function Product1 () {
    return (
        
        <article>
        <header>
        <span className="date">April 24, 2017</span>
        <h2>
        Ca Phe
        </h2>
        <img src={image1} alt="Product 1" className='product_image' />
        </header>
        </article>
        
        )
    }
    export default Product1