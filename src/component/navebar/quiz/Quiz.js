import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>hi bro</h2>
        </div>
    );
};

export default Quiz;