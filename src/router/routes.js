import {
   Cart,
   AllFoods,
   Checkout,
   Contact,
   Home,
   Login,
   Register,
   FoodDetails,
} from '../pages';
import { products } from '../assets/data/products';

export const routesArr = [
   { id: 1, path: '/', isMain: true, display: 'Home', element: Home },
   { id: 2, path: '/cart', isMain: true, display: 'Cart', element: Cart },
   { id: 3, path: '/foods', isMain: true, display: 'Foods', element: AllFoods },
   {
      id: 4,
      path: '/checkout',
      isMain: false,
      display: 'Checkout',
      element: Checkout,
   },
   {
      id: 5,
      path: '/contact',
      isMain: true,
      display: 'Contact',
      element: Contact,
   },
   { id: 6, path: '/login', isMain: false, display: 'Login', element: Login },
   {
      id: 7,
      path: '/register',
      isMain: false,
      display: 'Register',
      element: Register,
   },
];

for (let product of products) {
   const lastIndex = routesArr.length - 1
   routesArr.push({
      id: lastIndex,
      path: `/foods/${product.id}`,
      isMain: false,
      display: 'Product',
      element: FoodDetails,
   });
}