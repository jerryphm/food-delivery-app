import * as pageList from './pages';

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
   return <Routes>{routesArr}</Routes>;
}

export default RouteList;
