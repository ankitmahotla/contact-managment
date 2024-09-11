import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './error-page';
import Root from './routes/root';
import Contacts from './routes/contacts';
import Charts from './routes/charts';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import AddContact from './routes/add-contact';
import { PersistGate } from 'redux-persist/integration/react';
import EditContact from './routes/edit-contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Contacts />,
      },
      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/add-contact",
        element: <AddContact />,
      },
      {
        path: "/edit-contact",
        element: <EditContact />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
