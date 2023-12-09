import { Link } from "react-router-dom";
import followImg from "/public/follow/back_follow.svg"
import sad from "/public/follow/smile_sad.png"
import Sneaker from "../../components/sneaker/sneaker";
import BackButton from "../../components/backButton/backButton";
import { AppContext } from "../../App";
import { useContext } from "react";

const Follow = () => {
    const state = useContext(AppContext)
    return (
        <div className="follow">
            <div className="follow_title">
                <Link to='/'>
                    <img src={followImg} alt="" />
                </Link>
                <h3>Мои закладки</h3>
            </div>
            <div className="follow_sneakers">
                {state.follow.length?
                state.follow.map(e => <Sneaker key={e.price} name={e.title} price={e.price} img={e.img}/>)
                :
                <div className="follow_nothing">
                    <img src={sad} alt="" />
                    <h3>Закладок нет :(</h3>
                    <p>Вы ничего не добавляли в закладки</p>
                    <Link to='/'>
                        <BackButton/>
                    </Link>
                </div>
                }
            </div>
        </div>
    );
}

export default Follow;
