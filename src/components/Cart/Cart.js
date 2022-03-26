import React, { useState } from 'react';
import CartItems from '../CartItems/CartItems';
import LaunchModal from '../LaunchModal/LaunchModal';

const Cart = ({infoContainer,emptyCart}) => {
    const [selectedNum , setSelectedNum] = useState(0);
    const handleLuckyOne = ()=>{
        let number = Number((Math.random()*(infoContainer.length)).toFixed(0));
        if(number === infoContainer.length){
            number = number - 1;
        }
        setSelectedNum(number);
    }
    let selectedItemName;
    let selectedItemPrice;
    if(infoContainer[selectedNum]){
        selectedItemName = (infoContainer[selectedNum]).title;
        selectedItemPrice = (infoContainer[selectedNum]).tourCost;
    }
    else{
        selectedItemName='';
    }
    return (
        <div className= 'border'>
            <h1 className='my-3'>Cart</h1>
            {
               infoContainer.map(ietm =><CartItems ietm={ietm} key={ietm.id} ></CartItems>)
            }
            <div className='border p-2'>
                <div>
                    <LaunchModal handleLuckyOne={handleLuckyOne} selectedItemName={selectedItemName} selectedItemPrice={selectedItemPrice}></LaunchModal>
                </div>
                <div>
                    <button onClick={emptyCart} className='btn btn-danger py-2 my-2 px-3'>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;