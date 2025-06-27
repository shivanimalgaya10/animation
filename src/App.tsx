import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Login } from './views/Login';
import { Signup } from './views/Signup';
import { Home } from './views/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import Cards from './views/Cards/Cards';
import { Front } from './views/Front';
import CardImage from './views/CardImage/CardImage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement:<ErrorBoundary/>,
      children:[
        {
          path: 'signup',
          element: <Signup/>,
        },
        {
          path: 'login',
          element: <Login/>,
        },
        {
          path: 'cards',
          element: <Cards/>,
        },
        {
          path: 'front',
          element: <Front/>,
        },
        {
          path: 'card-image',
          element: <CardImage/>,
        },
      ]
    },
   
  ]);
  

  return  <RouterProvider router={router} />;
}

export default App
