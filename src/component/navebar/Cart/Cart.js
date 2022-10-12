import React from 'react';
import {Link} from 'react-router-dom'

const Cart = ({cartin}) => {
    const {logo,name,id} = cartin;
    return (
        
        <div className=" bg-gray-500 shadow-2xl rounded-xl ">
        <figure className="px-10 pt-10">
            <img src={logo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl py-2">{ name ?name: 'Not found'}</h2>
            <div className="card-actions flex items-center justify-center">
            <Link to={`../quiz/${id}`}>
                    <button className="flex items-center justify-center btn btn-primary bg-blue-500 font-semibold text-lg px-5 py-2 my-5 hover:bg-pink-600 duration-300 hover:text-white rounded-2xl">Start Practice

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                    </Link>
            </div>
        </div>
    </div>
    
    );
};

export default Cart;