import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { routesArr } from './routes';
import { setActivePage } from '../store/activePage/activePage';
import { useMemo } from 'react';

function MainLinksComp({ className, dispatch: dispatchToggleMenu }) {
   const dispatch = useDispatch();
   const activePage = useSelector((state) => state.activePage.activePage);
   const mainRoutesArr = routesArr.filter((routes) => routes.isMain);
   const draftUrlPath = useMemo(() => window.location.pathname, []);
   const checkIsActivePage = (path) => {
      if (activePage) {
         return activePage == path;
      } else {
         if (path != '/foods') {
            return draftUrlPath == path;
         }
         return draftUrlPath.includes(path);
      }
   };
   return (
      <div className={className}>
         {mainRoutesArr.map(({ path, display, id }) => (
            <Link
               onClick={() => {
                  dispatch(setActivePage(path));
                  if (dispatchToggleMenu) dispatchToggleMenu();
               }}
               className={`py-1 w-[70%] mx-auto  text-center ${
                  checkIsActivePage(path) ? 'text-red-500' : null
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
