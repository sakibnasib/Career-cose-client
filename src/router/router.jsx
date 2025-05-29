import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Banner from "../pages/Home/Banner";
import Banner2 from "../pages/Home/Banner2";
import Register from "../pages/Register/Register";
import SingIn from "../pages/SingnIn/SingIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplyCations from "../pages/MyApplications/MyApplyCations";
import Addjob from "../pages/AddJob/Addjob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApply from "../pages/ViewApply/ViewApply";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        Component: Home, },
      { path: "/register", Component: Register },
      {path:'/jobs/:id',
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        ,Component:JobDetails},
        {
          path:'/jobApply/:id',
          element:<PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        },
        {
          path:'/myAppliCations',
          element:<PrivateRoute>
            <MyApplyCations></MyApplyCations>
          </PrivateRoute>
        },
        {
          path:'/addjob',
          element:<PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        },
        {
         path:'/myPostedJob',
         element:<PrivateRoute>
          <MyPostedJob></MyPostedJob>
         </PrivateRoute>
        },
        {
          path:'applications/:job_id',
          loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`),
          element:<PrivateRoute>
            <ViewApply></ViewApply>
          </PrivateRoute>
        },
      { path: "/singIn", Component: SingIn },
    ],
  },
]);
export default router;
