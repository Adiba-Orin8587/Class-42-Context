import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          }
        ]
      },
      {
        path: '/contact',
        element: <Main></Main>,
        children: [
          {
            path: '/contact',
            element: <Contact></Contact>
          }
        ]
      },
      {
        path: '/about',
        element: <Main></Main>,
        children: [
          {
            path: '/about',
            element: <About></About>
          }
        ]
      },

    ]
  )


  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div >
  );
};

export default App;