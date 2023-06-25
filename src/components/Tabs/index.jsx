import { useQuery } from '@apollo/client'
import { ALL_CATEGORIES } from '../../apollo/queries'
import './index.scss'

function Tabs({ setCategory, category }) {
    const { data } = useQuery(ALL_CATEGORIES)
    if(!data) return null;
    const handleClick = (e) => {
        setCategory(e.target.value)
    }
  return (
    <div className='categories'>
        {data.categories.map(item => {
            return (
                <button
                    className={item.name === category ? 'categories__item active' : 'categories__item'}
                    key={item.name}
                    value={item.name}
                    onClick={handleClick}
                >
                    {item.name}
                </button>
            )
        })}
    </div>
  )
}

export default Tabs