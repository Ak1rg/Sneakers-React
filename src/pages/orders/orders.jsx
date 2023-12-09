import { Link } from "react-router-dom";
import followImg from "/public/follow/back_follow.svg"
import cute from "/public/orders/smile_cute.png"
import BackButton from "../../components/backButton/backButton";
import { AppContext } from "../../App";
import { useContext } from "react";
import SneakerOrder from "../../components/sneakerOrder/sneakerOrder";

const Orders = () => {
    const state = useContext(AppContext)
    return (
        <div className="follow">
            <div className="follow_title">
                <Link to='/'>
                    <img src={followImg} alt="" />
                </Link>
                <h3>Мои покупки</h3>
            </div>
            <div className="follow_sneakers">
                {state.orders.length?
                state.orders.map(e => <SneakerOrder key={e.price} name={e.title} price={e.price} img={e.img}/>)
                :
                <div className="follow_nothing">
                    <img src={cute} alt="" />
                    <h3>У вас нет заказов</h3>
                    <p>Вы нищеброд? Оформите хотя бы один заказ.</p>
                    <Link to='/'>
                        <BackButton/>
                    </Link>
                </div>
                }
            </div>
        </div>
    );
}

export default Orders;
