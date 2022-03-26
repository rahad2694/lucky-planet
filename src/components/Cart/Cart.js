import React from 'react';
import CartItems from '../CartItems/CartItems';

const Cart = ({infoContainer}) => {
    // console.log(infoContainer);
    return (
        <div className= 'border'>
            <h1 className='my-3'>Cart</h1>
            {
               infoContainer.map(ietm =><CartItems ietm={ietm} key={ietm.id} ></CartItems>)
            }
            <div className='border d-flex justify-content-between p-2'>
                <button className='btn btn-success my-2'>Lucky-One</button>
                <button className='btn btn-danger py-2 my-2 px-3'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;