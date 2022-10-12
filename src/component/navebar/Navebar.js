import React from 'react';
import {Link} from 'react-router-dom'

const Navebar = () => {
    return (
        <div>
            <nav className='nave-container'>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">e-learn</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
     <li><Link to="/" >Home</Link></li>
      <li><Link to="/Statisticks">Statisticks</Link></li>
      <li><Link to="/Topic" >Topic</Link></li>
      <li><a href='/Blog'>Blog</a></li>
    </ul>
  </div>
</div>
            </nav>
        </div>
    );
};

export default Navebar;