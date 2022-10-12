import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Footer from '../layout/Footer/Footer';

const Header = () => {
  const cartings = useLoaderData();
  const quiz = (cartings.data)


    return (
        <div className='header-path'>
      
         <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <img src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/309937910_1104780803513464_766849961097570284_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=JsiNJ65nAyIAX9h9ljA&_nc_ht=scontent.fdac157-1.fna&oh=00_AT_hjoyfOG7q2mRhmS6gboYw8JuaNP7BDZ8-2sKFdV6-uA&oe=634B600F" className="w-full"  alt='find'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    </div>
  </div> 
  </div>
  
  {/* header finish */}
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-3/5 mx-auto'>
  {
                    quiz.map(cartin => <Cart
                   key={cartin.id}
                   cartin={cartin}></Cart>)
            }
              
            </div>
            <Footer></Footer>
           
</div>
     
    );
};

export default Header;