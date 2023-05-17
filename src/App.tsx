import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 3,
          staleTime: 1000 * 60 * 3,
        }
      }
    }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App;
