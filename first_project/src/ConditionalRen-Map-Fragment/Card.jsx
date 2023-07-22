import React from 'react'
import "./Card.css";

function Card() {
    return (
        <>
            <div className="main">
                <div className='card'>
                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='card_img' />
                </div>
                <div className='card_det'>
                    <h3>Product Name:Test</h3>
                    <h3>Price:100</h3>
                    <h3>Description: Its good</h3>
                </div>
            </div>
        </>
    )
}

export default Card