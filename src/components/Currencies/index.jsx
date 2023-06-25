import { useQuery } from '@apollo/client'
import { ALL_CURRENCIES } from '../../apollo/queries'
import { useEffect, useState } from 'react'

import './index.scss'

function Currencies({ setCurrency, currency }) {
    const { data } = useQuery(ALL_CURRENCIES)
    useEffect(() => {
        if (data) setCurrency(data.currencies[0].label)
    }, [])
    const [isOpen, setIsOpen] = useState(false)
    const handleChange = (e) => {
        setCurrency(e.target.value)
        setIsOpen(false)
    }
    if (!data) return null
    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
            >
                <button className='currencies__item'>
                    {data.currencies.find(item => item.label === currency).symbol} {currency}
                </button>
                <span></span>
            </button>
            <div className={isOpen ? "currencies open" : "currencies"}>
                {data.currencies.map(item => {
                    return (
                        <button
                            className='currencies__item'
                            key={item.label}
                            onClick={handleChange}
                            value={item.label}
                        >
                            {item.symbol} {item.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Currencies