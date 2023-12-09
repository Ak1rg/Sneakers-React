import { useContext, useState } from 'react'
import add from '/public/home/add.svg'
import added from '/public/home/added.svg'
import followImg from '/public/home/follow.svg'
import followedImg from '/public/home/followed.svg'
import HomeLoader from '../sneakerLoader/homeLoader/homeLoader'
import { AppContext } from '../../App'

const Sneaker = ({name,price,img}) => {

    const [addBtn, setAddBtn] = useState(true)
    const state = useContext(AppContext)

    const adding = () => {
        state.setItems([...state.items,{title:name,price:price,img:img}]);
        setAddBtn(!addBtn)
    }
    const removed = (item) => {
        state.items.splice(state.items.findIndex(e => e.title == item),1)
        setAddBtn(!addBtn)
        state.setItems([...state.items])
    }
    const addFollow = () => {
        state.setFollow([...state.follow,{title:name,price:price,img:img}])
    }
    const removeFollow = (item) => {
        state.follow.splice(state.follow.findIndex(e => e.price == item),1)
        state.setFollow([...state.follow])
    }

    return (
        <div className="sneaker">
            {state.isLoading?
            <HomeLoader/>
            :        
            <>
                <div className='sneaker-img'>
                    <img src={img} alt="" />
                    {state.follow.some(e => e.price === price)?<img src={followedImg} alt="" onClick={() => removeFollow(price)}/>:<img src={followImg} alt="" onClick={() => addFollow()}/>}
                </div>
                <h4>{name}</h4>
                <div className='sneaker-price'>
                    <div>
                        <p>Цена:</p>
                        <h5>{price} руб.</h5>
                    </div>
                    {state.items.some(e => e.price === price)?<img src={added} onClick={() => removed(name)} />:<img src={add} alt="" onClick={() => adding()}/>}
                </div>
            </>}
        </div>
    );
}

export default Sneaker;
