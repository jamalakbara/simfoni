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
import UseCase from './routes/UseCase/UseCase';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/how-we-works",
    element: <HowWeWorks />,
  },
  {
    path: "/usecase",
    element: <UseCase />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
