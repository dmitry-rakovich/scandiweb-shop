import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS } from '../../apollo/queries'
import './index.scss'

function Products({ category, currency }) {
  const { data } = useQuery(ALL_PRODUCTS, {
    variables: {
      input: {
        "title": category
      }
    }
  })
  if (!data) return null;
  const checkCurrency = (prices) => {
    const currentPrice = prices.find(item => item.currency.label === currency)
    return (
    <>
      <span className="currency-symbol">{currentPrice.currency.symbol}</span>
      <span className="currency-amount">{currentPrice.amount}</span>
    </>
    )
  }
  return (
    <div className='products'>
      <h1 className='products__category'>{category}</h1>
      <div className='products__wrapper'>
        {data.category.products.map(item => {
          return (
            <div key={item.id} className='product'>
              <div className="product__image-wrapper">
                <img src="./src/assets/images/Product.png" alt="" width="330" height="330" />
                <button className='product__cart'>
                  <img src="./src/assets/images/add-to-cart.svg" alt="" />
                </button>
              </div>
              <h2>{item.brand} {item.name}</h2>
              <div>{checkCurrency(item.prices)}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products