import './index.scss'
import Currencies from '../Currencies'
import Tabs from '../Tabs'
import Cart from '../Cart'

function Header ({setCategory, category, setCurrency, currency}) {
  return (
    <header className='header'>
        <Tabs {...{setCategory, category}}/>
        <a className="" href="/">
          <img src="./src/assets/images/logo.svg" alt="" />
        </a>
        <div className='utils'>
          <Currencies {...{setCurrency, currency}}/>
          <Cart/>
        </div>
    </header>
  )
}

export default Header