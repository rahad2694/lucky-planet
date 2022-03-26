import React, { useState } from 'react';
import CartItems from '../CartItems/CartItems';
import LaunchModal from '../LaunchModal/LaunchModal';
import './Cart.css';

const Cart = ({infoContainer}) => {
    console.log(infoContainer);
    const [selectedNum , setSelectedNum] = useState(0);
    const handleLuckyOne = ()=>{
        let number = Number((Math.random()*(infoContainer.length)).toFixed(0));
        if(number === infoContainer.length){
            number = number - 1;
        }
        setSelectedNum(number);
    }
    let selectedItemName;
    let selectedItem;
    if(infoContainer[selectedNum]){
        selectedItem = infoContainer[selectedNum];
        selectedItemName = (infoContainer[selectedNum]).title;
    }
    else{
        selectedItemName='';
    }
    
    return (
        <div className= 'border cart-container'>
            <h1 className='my-3'>Cart</h1>
            {
               infoContainer.map(ietm =><CartItems ietm={ietm} key={ietm.id} ></CartItems>)
            }
            <div className='border d-flex justify-content-between p-2'>
                {/* <button onClick={handleLuckyOne} className='btn btn-success my-2'>Lucky-One</button> */}
                <LaunchModal handleLuckyOne={handleLuckyOne} selectedItem={selectedItem} selectedItemName={selectedItemName}></LaunchModal>
                <button className='btn btn-danger py-2 my-2 px-3'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;