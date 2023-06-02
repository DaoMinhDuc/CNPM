
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './store';
import Login from './User/Login';
import './App.css'
import Book from './User/Book';
import Cart from './User/Cart';
import SignUp from './User/SignUp';




const router = createBrowserRouter([ {
  path: "/",
  element: <Book />,
},
{
  path: "/login",
  element: <Login />,
},
{
  path: "/cart",
  element: <Cart />,
},
{
  path: "/sign-up",
  element: <SignUp />,
},

]);

function App() {
 

  return (
    <div>
    <Provider store={store} >
    <RouterProvider router={router} />
    
  </Provider>
 
  </div>
  )
}

export default App
