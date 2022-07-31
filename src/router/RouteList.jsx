import * as pageList from '../pages';

import { Route, Routes } from 'react-router-dom';

function RouteList() {
   const routesArr = [];
   for (let pageString in pageList) {
      const PageComp = pageList[pageString];
      if (pageString === 'Home') pageString = '';
      routesArr.push(
         <Route
            key={pageString}
            path={`/${pageString.toLowerCase()}`}
            element={<PageComp />}
         />
      );
   }
   return (
      <div className='mt-[72px] sm:mt-[96px]'>
         <Routes>{routesArr}</Routes>
      </div>
   );
}

export default RouteList;
