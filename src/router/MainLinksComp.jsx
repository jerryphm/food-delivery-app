import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routesArr } from './routes';

function MainLinksComp({ className, dispatch }) {
   const mainRoutesArr = routesArr.filter((routes) => routes.isMain);
   const [urlPath, setUrlPath] = useState(window.location.pathname);
   return (
      <div className={className}>
         {mainRoutesArr.map(({ path, display, id }) => (
            <Link
               onClick={() => {
                  setUrlPath(path);
                  if (dispatch) dispatch();
               }}
               className={`py-1 w-full text-center ${
                  urlPath == path ? 'text-red-500' : null
               }`}
               to={path}
               key={id}
            >
               {display}
            </Link>
         ))}
      </div>
   );
}

export default MainLinksComp;
