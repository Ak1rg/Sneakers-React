import { useContext } from "react";
import { AppContext } from "../../App";
import HomeLoader from "../sneakerLoader/homeLoader/homeLoader";

const SneakerOrder = ({name,price,img}) => {
    const state = useContext(AppContext)
    return (
        <div className="sneaker-order">
            {state.isLoading?
            <HomeLoader/>
            :        
            <>
                <div className='sneaker-order-img'>
                    <img src={img} alt="" />
                </div>
                <h4>{name}</h4>
                <div className='sneaker-order-price'>
                    <div>
                        <p>Цена:</p>
                        <h5>{price} руб.</h5>
                    </div>
                </div>
            </>}
        </div>
    );
}

export default SneakerOrder;
