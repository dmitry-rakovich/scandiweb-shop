import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'

function App() {
  const [category, setCategory] = useState('all')
  const [currency, setCurrency] = useState('USD')
  return (
    <>
      <Header {...{setCategory, category, setCurrency, currency}}/>
      <Products {...{category, currency}}/>
    </>
  )
}

export default App
