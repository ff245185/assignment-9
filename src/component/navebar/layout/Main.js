import React from 'react';
import {Outlet} from 'react-router-dom'
import Navebar from '../Navebar';

const Main = () => {
    return (
        <div>
          <Navebar></Navebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;