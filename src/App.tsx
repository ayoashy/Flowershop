import './App.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import {QueryClient,QueryClientProvider} from 'react-query'
import InputFields from './components/InputFields';

const App: React.FC = () => {
  const queryClient = new QueryClient()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <h3>This might be about page</h3>,
    },
    {
      path: '/*',
      element: <h1>Not found page</h1>,
    },
    {path: '/inputs',
  element: <InputFields/>}
  ]);
  return (
    <div>
      <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
