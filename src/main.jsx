import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {  QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider  client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  </BrowserRouter>,
)
