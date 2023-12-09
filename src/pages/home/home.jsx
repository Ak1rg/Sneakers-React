import Sneaker from '../../components/sneaker/sneaker';
import swiper from '/public/home/swiper.png'
import img1 from '/public/home/sneaker1.png'
import img2 from '/public/home/sneaker2.png'
import img3 from '/public/home/sneaker3.png'
import img4 from '/public/home/sneaker4.png'
import img5 from '/public/home/sneaker5.png'
import img6 from '/public/home/sneaker6.png'
import img7 from '/public/home/sneaker7.png'
import img8 from '/public/home/sneaker8.png'
import { useState } from 'react';

const Home = () => {
    const [searchValue, setSearchValue] = useState('')

    const sneakers = [
        {
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
            price:12999,
            img:img1
        },
        {
            name:'Мужские Кроссовки Nike Air Max 270',
            price:11999,
            img:img2
        },
        {
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
            price:14699,
            img:img3
        },
        {
            name:'Кроссовки Puma X Aka Boku Future Rider',
            price:8999,
            img:img4
        },
        {
            name:'Мужские Кроссовки Under Armour Curry 8',
            price:15199,
            img:img5
        },
        {
            name:'Мужские Кроссовки Nike Kyrie 7',
            price:18799,
            img:img6
        },
        {
            name:'Мужские Кроссовки Jordan Air Jordan 11',
            price:16699,
            img:img7
        },
        {
            name:'Мужские Кроссовки Nike LeBron XVIII',
            price:9499,
            img:img8
        },
    ]

    return (
        <div className='home' >
            <div className="home-swiper">
                <img src={swiper} alt="" />
            </div>
            <div className='home-search'>
                <h2>Все кроссовки</h2>
                <input type="text" onChange={e =>setSearchValue(e.target.value)} placeholder='Поиск...' />
            </div>
            <div className='all-sneakers'>
                {
                    sneakers.filter(e => e.name.toLowerCase().includes(searchValue)).map(e =>  <Sneaker key={e.price} name={e.name}  price={e.price} img={e.img}/>)
                }
            </div>
        </div>
    );
}

export default Home;
