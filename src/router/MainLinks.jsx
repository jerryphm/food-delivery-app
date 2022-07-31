import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function MainLinks({ className, toggleMenu }) {
   const { current: linkList } = useRef([
      { to: '/', display: 'Home' },
      { to: '/fooddetails', display: 'Foods' },
      { to: '/cart', display: 'Cart' },
      { to: '/contact', display: 'Contact' },
   ]);

   const [path, setPath] = useState(window.location.pathname);
   return (
      <div className={className}>
         {linkList.map(({ to, display }) => (
            <Link
               onClick={() => {
                  setPath(to);
                  toggleMenu()
               }}
               className={path == to ? 'text-red-500' : null}
               key={to}
               to={to}
            >
               {display}
            </Link>
         ))}
      </div>
   );
}

export default MainLinks;