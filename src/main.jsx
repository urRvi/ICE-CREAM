import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import Ingredients from './pages/Ingredients.jsx';
import Places from './pages/Places.jsx';
import Calories from './pages/Calories.jsx';
import Upload from './pages/Upload.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/recipes', element: <Recipes /> },
      { path: '/ingredients', element: <Ingredients /> },
      { path: '/places', element: <Places /> },
      { path: '/calories', element: <Calories /> },
      { path: '/upload', element: <Upload /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
