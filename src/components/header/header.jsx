import logo from '/public/header/icon.png'
import shop from '/public/header/header_icon_shop.svg'
import follow from '/public/header/header_icon_follow.svg'
import profile from '/public/header/header_icon_profile.svg'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { useContext } from 'react'

const Header = () => {

    const state = useContext(AppContext)
    const total = state.items.reduce((a, b) => {
        return a + b.price;
    }, 0);
    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <div className='logo-name'>
                        <h1>REACT SNEAKERS</h1>
                        <h3>Магазин лучших кроссовок</h3>
                    </div>
                </div>
            </Link>
            <div className="buttons">
                <div onClick={() => state.setsidecart(true)}>
                    <img src={shop} alt=""/>
                    <p>{total} руб.</p>
                </div>
                <Link to='/follow'>
                    <div>
                        <img src={follow} alt="" />
                        <p>Закладки</p>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div>
                        <img src={profile} alt="" />
                        <p>Профиль</p>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
