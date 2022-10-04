import './Preview.css';
import productImage from './images/graded_card.png';
import shoppingIcon from './images/icon-cart.svg';

function Preview({product: {productType, productName, productDesc, price, priceReduced}}) {
    return (
        <div className='grid-container'>
            <img className='grid-container__product_image' src={productImage} alt='playing card of Kostya Farber'/>
            <div className='product-card'>
                <p className='product-card__type'>{productType}</p>

                <h1>{productName}</h1>

                <p className='product-card__desc'>{productDesc}</p>
                <div className='product-card__product_prices'>
                    <p className='product-card__price'>{price}</p>
                    <p className='product-card__price-reduced'>{priceReduced}</p>
                </div>

                <button>
                    <img src={shoppingIcon} alt=''/>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
}

export default Preview;