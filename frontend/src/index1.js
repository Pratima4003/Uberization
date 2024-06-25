import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './frontend/App';
import { RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Landing from './frontend/page/landing/landing';
import LoginForm from './frontend/page/login/login';
import Layout from './frontend/components/Layout';
import Dashboard from './frontend/page/dashboard/dashboard';
import VehicleType from './frontend/page/admin/vehicletypes/vehicletype';
import RequestForm from './frontend/page/user/request/requestform';
import DestinationType from './frontend/page/admin/destinationtypes/destinationtype';
import Request from './frontend/page/user/request/request';
import TrackVehicle from './frontend/page/user/locatevehicle/trackvehicle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Landing />
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'vehicletype',
        element: <VehicleType />
      },
      {
        path: 'requestform',
        element: <RequestForm />
      },
      {
        path: 'destinationtype',
        element: <DestinationType />
      },
      {
        path: 'request',
        element: <Request />
      },
      {
        path: 'trackvehicle',
        element: <TrackVehicle />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
