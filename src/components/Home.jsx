import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    // console.log(props,"props in home")
    const GoToCard = (e) => {
        // e.preventDefault();
        navigate('/addedelement')
    }
    return (
        <div>
            <div className="add-to-cart">
                <span className='cart-count'>{props.data.length}</span>
                <img onClick={GoToCard} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU' />
            </div>
            <h1> Add items in the cart </h1> <br /><br />
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://rukminim1.flixcart.com/image/850/1000/k2jbyq80pkrrdj/mobile-refurbished/u/z/t/iphone-11-256-c-mwmd2hn-a-apple-0-original-imafkg24wszdhzy3.jpeg?q=90" />
                </div>
                <div className="text-wrapper item">
                    <h3>  I-Phone 13  </h3>
                    <h4> Price: $41000.00 </h4>
                </div>

                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ price: 41000, name: 'i phone 13' }) }
                        }>
                        Add To Cart</button>
                    <button className='remove-to-cart'
                        onClick={() => { props.removeToCartHandler() }}>Remove To Cart</button>
                </div>
            </div><br />
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="text-wrapper item">
                    <h3>  I-Phone-11  </h3>
                    <h5> Price: $31000.00 </h5>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ price: 31000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>
                    <button className='remove-to-cart'
                        onClick={() => { props.removeToCartHandler() }}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
