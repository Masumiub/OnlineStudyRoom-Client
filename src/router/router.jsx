import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register'
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAttempted from "../pages/MyAttempted/MyAttempted";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import Assignments from "../pages/Assignments/Assignments";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import Lottie from 'lottie-react';
import loadingLottie from '../assets/Animation - Loading.json'
import DashboardLayout from "../layout/DashboardLayout";
import Stats from "../pages/Stats/Stats";
import AllAssignments from "../pages/Assignments/AllAssignments";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <div className="flex flex-col mx-auto justify-center h-screen">
            <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
            <div><p className="text-center text-4xl mt-5">Loading...</p></div>
        </div>,
        children: [
            {
                index: true,
                loader: () => fetch('https://online-study-room-server.vercel.app/latestAssignments?limit=4&sort=postedAt'),
                Component: Home
            },
            {
                path: '/assignments',
                Component: Assignments,
            },
            {
                path: '/aboutUs',
                Component: AboutUs
            },
            {
                path: '/assignmentDetails/:id',
                element: <AssignmentDetails></AssignmentDetails>,
            },
            {
                path: '/updateAssignment/:id',
                element: <PrivateRoute> <UpdateAssignment></UpdateAssignment> </PrivateRoute>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register

            },
            {
                path: '/contactUs',
                Component: ContactUs
            },
            {
                path: '/error',
                element: <ErrorPage />
            }
        ]
    },

    {
        path: "/dashboard",
        Component: DashboardLayout,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <div className="flex flex-col mx-auto justify-center h-screen">
            <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
            <div><p className="text-center text-4xl mt-5">Loading...</p></div>
        </div>,
        children: [
            {
                index: true,
                loader: ()=>fetch('https://online-study-room-server.vercel.app/assignments'),
                Component: Stats
            },
            {
                path: 'allAssignment',
                element: <PrivateRoute> <AllAssignments></AllAssignments> </PrivateRoute>
            },
            {
                path: 'assignmentDetails/:id',
                element: <PrivateRoute> <AssignmentDetails></AssignmentDetails></PrivateRoute>,
            },
            {
                path: 'createAssignment',
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            },
            {
                path: 'updateAssignment/:id',
                element: <PrivateRoute> <UpdateAssignment></UpdateAssignment> </PrivateRoute>
            },
            {
                path: 'myAttempted',
                element: <PrivateRoute><MyAttempted></MyAttempted> </PrivateRoute>
            },
            {
                path: 'pendingAssignments',
                element: <PrivateRoute> <PendingAssignments></PendingAssignments></PrivateRoute>
            },
            {
                path: 'myProfile',
                element: <PrivateRoute> <MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: 'updateProfile',
                element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
            },
        ]
    }
]);

export default router;