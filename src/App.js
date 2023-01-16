import './App.css';
import Home from './routes/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HowWeWorks from './routes/HowWeWorks/HowWeWorks';
import UseCase from './routes/UseCase/UseCase';
import Pricing from './routes/Pricing/Pricing';
import Partnership from './routes/Partnership/Partnership';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';

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
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/partnership",
    element: <Partnership />,
  },
  {
    path: "/about-us",
    element: <><Navbar /> <NotFoundPage /></>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
