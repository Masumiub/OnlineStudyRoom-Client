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
                loader: ()=>fetch('https://online-study-room-server.vercel.app/latestAssignments?limit=3&sort=postedAt'),
                Component: Home
            },
            {
                path: '/assignments',
                //loader: ()=>fetch('https://online-study-room-server.vercel.app/assignments'),
                Component: Assignments,
            },
            {
                path: '/assignmentDetails/:id',
                //loader: ({ params }) => fetch(`https://online-study-room-server.vercel.app/assignments/${params.id}`),
                element: <PrivateRoute> <AssignmentDetails></AssignmentDetails></PrivateRoute>,
            },
            {
                path: '/createAssignment',
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            },
            {
                path: '/updateAssignment/:id',
                //loader: ({ params }) => fetch(`https://online-study-room-server.vercel.app/assignments/${params.id}`),
                element: <PrivateRoute> <UpdateAssignment></UpdateAssignment> </PrivateRoute>
            },
            {
                path: '/myAttempted',
                element: <PrivateRoute><MyAttempted></MyAttempted> </PrivateRoute>
            },
            {
                path: '/pendingAssignments',
                //loader: ()=> fetch('https://online-study-room-server.vercel.app/pendings'),
                element: <PrivateRoute> <PendingAssignments></PendingAssignments></PrivateRoute>
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
                path: '/error',
                element: <ErrorPage />
            }
        ]
    },
]);

export default router;