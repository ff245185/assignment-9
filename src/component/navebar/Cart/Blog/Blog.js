import React from 'react';
import Answer from '../../ErrorPage/Answer/Answer';
import Footer from '../../layout/Footer/Footer';

const Blog = () => {
    return (
   
             <div className='mt-28'>
            <h1 className='text-4xl md:text-6xl font-bold px-3 py-20 md:py-32 wrap'>some Interview Quesion $ Answer</h1>
            <Answer></Answer>
            <Footer></Footer>
        </div>
       
    );
};

export default Blog;