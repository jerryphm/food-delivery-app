import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function MainLinks({className, onClick}) {
   const { current: linkList } = useRef([
      { to: '/', display: 'Home' },
      { to: '/fooddetails', display: 'Foods' },
      { to: '/cart', display: 'Cart' },
      { to: '/contact', display: 'Contact' },
   ]);

   const [path, setPath] = useState(window.location.pathname);
   return (
      <div onClick={onClick} className={className}>
         {linkList.map(({ to, display }) => (
            <Link
               onClick={() => setPath(to)}
               className={path == to ?'text-red-500' : null}
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
