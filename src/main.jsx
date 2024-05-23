import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/Listed Books/ListedBooks';
import PagestoRead from './components/Pages to Read/PagestoRead';
import BookDetails from './components/BookDetails/BookDetails';
import Review from './components/Review/Review';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
     errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/Listed', 
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'), 
        children:[
        //   {path: '/read',
        //   element: <ListedBooks></ListedBooks>
        // },
        // {path: '/wishlist',
        //   element: <ListedBooks></ListedBooks>
        // }
        ]
      },
      {
        path: '/book/:id',
        element:<BookDetails></BookDetails>, 
        loader: () => fetch('/books.json')
      },
      {
        path: '/Pages',
        element:<PagestoRead></PagestoRead>
      },
      {
        path: '/Reviews',
        element:<Review></Review>
      },
      {
        path: '/About',
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
