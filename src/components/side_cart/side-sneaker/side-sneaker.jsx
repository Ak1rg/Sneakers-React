import remove from '/public/side-cart/remove.svg'

const SideSneaker = ({img,name,price,changeSideSneaker}) => {

    return (
        <div className='side-sneaker'>
            <div className='side-sneaker-img'>
                <img src={img} alt="" />
            </div>
            <div className='side-sneaker-price'>
                <h4>{name}</h4>
                <h5>{price} руб.</h5>
            </div>
            <div className='remove' onClick={() => changeSideSneaker(name)}>
                <img src={remove} alt=""/>
            </div>
        </div>
    );
}

export default SideSneaker;
