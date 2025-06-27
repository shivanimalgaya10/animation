import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Login } from './views/Login';
import { Signup } from './views/Signup';
import { Home } from './views/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import Cards from './views/Cards/Cards';
import { Front } from './views/Front';
import CardImage from './views/CardImage/CardImage';
import Layout from './views/Layout';
import { Services } from './views/Services';
import { ThemeProvider } from './context/ThemeContext';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement:<ErrorBoundary/>,
      children:[
        {
          index: true,
          element: <Home />
        },
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
          path: 'services',
          element: <Services/>,
        },
        {
          path: 'card-image',
          element: <CardImage/>,
        },
      ]
    },
  ]);
  

  return <ThemeProvider>
     <RouterProvider router={router} />
  </ThemeProvider>;
}

export default App
