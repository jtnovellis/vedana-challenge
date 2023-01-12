import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import New from './routes/New';
import Root, { loaderTasks } from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/new',
    element: <New />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
