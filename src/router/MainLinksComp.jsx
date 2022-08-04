import React, { useState } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { routesArr } from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../store/activePage/activePage';

function MainLinksComp({ className, dispatch: dispatchToggleMenu }) {
   const dispatch = useDispatch();
   const activePage = useSelector((state) => state.activePage.activePage);
   const mainRoutesArr = routesArr.filter((routes) => routes.isMain);
   const draftUrlPath = useMemo(() => window.location.pathname, []);
   let urlPath;
   if (activePage) {
      urlPath = activePage;
   } else {
      urlPath = draftUrlPath;
   }
   return (
      <div className={className}>
         {mainRoutesArr.map(({ path, display, id }) => (
            <Link
               onClick={() => {
                  dispatch(setActivePage(path));
                  if (dispatchToggleMenu) dispatchToggleMenu();
               }}
               className={`py-1 w-[70%] mx-auto  text-center ${
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
