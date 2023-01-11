import logo from './logo.svg';
import './App.css';
import Home from './routes/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HowWeWorks from './routes/HowWeWorks/HowWeWorks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/how-we-works",
    element: <HowWeWorks />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
