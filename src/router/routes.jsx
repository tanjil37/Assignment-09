import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Plants from "../pages/Plants";
import Profile from "../pages/MyProfile";
import Register from "../pages/Register";
import PlantsDetails from "../components/PlantsDetails";
import PrivetRoute from "../privateRoute/PrivateRoute";
import PlantDetails from "../components/PlantDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home, 
            },
            {
                path: '/plants',
                Component: Plants, 
            },
            {
                path: '/plants/:id',
                element: (
                    <PrivetRoute>
                        <PlantDetails/>
                    </PrivetRoute>
                ), 
            },
             {
                path: '/profile',
                element: (
                    <PrivetRoute>
                        <Profile/>
                    </PrivetRoute>
                ), 
            },
            {
                path: '/login',
                Component: Login,
            },
             {
                path: '/register',
                Component: Register,
            },

        ]
    }
])
