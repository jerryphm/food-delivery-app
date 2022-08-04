import { Route, Routes } from 'react-router-dom';

import { routesArr } from './routes';

function RoutesComp() {
   return (
      <Routes>
         {routesArr.map(({ path, element: Element, id }) => (
            <Route path={path} element={<Element />} key={id} />
         ))}
      </Routes>
   );
}

export default RoutesComp;
