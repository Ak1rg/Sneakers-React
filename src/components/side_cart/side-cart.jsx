import { useContext, useState } from "react";
import BackButton from "../backButton/backButton";
import SideSneaker from "./side-sneaker/side-sneaker";
import box from "/public/side-cart/box.png";
import confirmImg from "/public/orders/order_confirm.png";
import { AppContext } from "../../App";


const SideCart = () => {
    const [confirm, setconfirm] = useState(false)
    const state = useContext(AppContext)

    const changeSideSneaker = (e) => {
        state.items.splice(state.items.findIndex(e => e.title == e),1)
        state.setItems([...state.items])
    }

    const buying =() => {
        state.setOrders(state.orders.concat(state.items))
        state.setItems([])
        setconfirm(true)
        setTimeout(() => {
            setconfirm(false)
        }, 5000);
    }
    const total = state.items.reduce((a, b) => {
        return a + b.price;
    }, 0);

    return (
        <div className="side-cart">
            <div className="overlay" onClick={() => state.setsidecart(false)}>
            </div>
            <div className="drawer">
                <h2>Корзина</h2>
                {
                    state.items.length?
                    <>
                        <div className="drawer-list">
                            {state.items.map((e,i) => <SideSneaker key={i}  name={e.title} price={e.price} img={e.img}  changeSideSneaker={changeSideSneaker} />)}
                        </div>
                        <div className="drawer-pay">
                            <div className="drawer-pay-line">
                                <h5>Итого:</h5>
                                <div></div>
                                <h4>{total} руб.</h4>
                            </div>
                            <div className="drawer-pay-line">
                                <h5>Налог 5%:</h5>
                                <div></div>
                                <h4>{Math.floor(total*0.05)} руб.</h4>
                            </div>
                            <button onClick={() => buying()}>Оформить заказ</button>
                        </div>
                    </>
                    :
                    <div className="box" onClick={() => state.setsidecart(false)}>
                        {confirm?<img src={confirmImg}/>:<img src={box}/>}
                        {confirm?<h3>Заказ оформлен!</h3>:<h3>Корзина пустая</h3>}
                        {confirm?<h4>Ваш заказ #18 скоро будет передан курьерской доставке</h4>:<h4>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</h4>}
                        <BackButton/>
                    </div>
                }
            </div>
        </div>
    );
}

export default SideCart;
