
import Main from './component/navebar/layout/Main'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Header from './component/navebar/Header/Header'
import Navebar from './component/navebar/Navebar'
import './App.css';
import Footer from './component/navebar/layout/Footer/Footer';
import Blog from './component/navebar/Cart/Blog/Blog'
import Quiz from './component/navebar/quiz/Quiz'
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
        path:'/Topic',
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element:<Topic></Topic>
      },
      {
       path:'quiz/:quizid',
       loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`),
       element:<Quiz></Quiz>

      },
      {
      path:'/Blog',
        element:<Blog></Blog>
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
