
import Main from './component/navebar/layout/Main'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Header from './component/navebar/Header/Header'
import Navebar from './component/navebar/Navebar'
import './App.css';
import Footer from './component/navebar/layout/Footer/Footer';
import Blog from './component/navebar/Cart/Blog/Blog'
import Topic from './component/navebar/Cart/Topic/Topic';

function App() {

  const router =  createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
       
        {
          path:'navebar',
          element:<Navebar></Navebar>
        },
        {
          path:'/',
         loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Header></Header>
      },
      {
        path:'navebar',
        element:<Footer></Footer>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'topic',
        element:<Topic></Topic>
      }
      ]
    }
  ])
  return (
    <div className="App">


     <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
