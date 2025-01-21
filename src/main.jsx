import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home/Home';
import FAQ from './Components/Home/FAQ';
import Login from './Components/Registrations/Login';
import SignUp from './Components/Registrations/SignUp';
import DonationInfo from './Components/Home/DonationInfo';
import AuthProvider from './providers/AuthProvider';
import DonorForm from './Components/DonorForm/DonorForm';
import PrivateRoutes from './PrivateRoutes';
import RequestBloodForm from './Components/Home/RequestBloodForm/RequestBloodForm';
import DashboardContent from './Components/User Dashboard/DashboardContent';
import BloodDonationHistory from './Components/User Dashboard/Pages/BloodDonationHistory';
import Donors from './Components/DonorForm/Donors';
import RequestBloodCards from './Components/Home/RequestBloodForm/RequestBloodCards';
import DonorDetails from './Components/DonorForm/DonorDetails';
import AdminDashboard from './Components/User Dashboard/Admin/AdminDashboard';
import Dashboard from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile';
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query';
import AllUsers from './Dashboard/AllUsers/AllUsers';
import AllDonors from './Dashboard/AllUsers/AllDonors/AllDonors';
import AllRequests from './Dashboard/AllRequests/AllRequests';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/donor')
      },
      {
        path: '/donationinfo',
        element: <DonationInfo></DonationInfo>

      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      }

    ]
  },
  {
    path: "/donate",
    element: <PrivateRoutes><DonorForm></DonorForm></PrivateRoutes>
  },
  {
    path: '/donors',
    element: <Donors></Donors>,
    loader: () => fetch('http://localhost:5000/donor')
  },
  {
    path: '/donorDetails/:id',
    element: <PrivateRoutes><DonorDetails></DonorDetails></PrivateRoutes>,
    loader: ({ params }) => fetch(`http://localhost:5000/donor/${params.id}`)
  },
  {
    path: 'requestBlood',
    element: <RequestBloodCards></RequestBloodCards>,
    loader: () => fetch('http://localhost:5000/requestblood')
  },
  {
    path: "/requestbloodform",
    element: <PrivateRoutes><RequestBloodForm></RequestBloodForm></PrivateRoutes>
  },
  {
    path: '/userprofile',
    element: <PrivateRoutes><DashboardContent></DashboardContent></PrivateRoutes>
  },
  {
    path: '/history',
    element: <BloodDonationHistory></BloodDonationHistory>
  },
  {
    path: '/admindashboard',
    element: <AdminDashboard></AdminDashboard>
  },


  //update dashboard,
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'profile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'alldonors',
        element: <AllDonors></AllDonors>
      },
      {
        path: 'allrequests',
        element:<AllRequests></AllRequests>
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </AuthProvider>
  </StrictMode>,
)
