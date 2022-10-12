import React from 'react';
import Cart from '../../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
  const cartings = useLoaderData();
  const quiz = cartings.data
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-3/5 mx-auto'>
        <div>
           {
                    quiz.map(cartin => <Cart
                   key={cartin.id}
                   cartin={cartin}></Cart>)
            }
        
        </div>
        </div>
    );
};

export default Topic;