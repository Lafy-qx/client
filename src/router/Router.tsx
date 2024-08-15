import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/HomePage/Home";
import CurrentComplex from "../pages/CurrentComplex/CurrentComplex.tsx";
import FAQ from "../pages/FAQpage/FAQ.tsx";
import NotFoud from "../pages/NotFound/NotFoud.tsx";
import Apartaments from "../pages/Apartaments/Apartaments.tsx"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoud />,

        children: [
            // Главная страница
            {
                path: "/",
                element: <Home />,
                errorElement: <NotFoud />,
            },
            // Конкретный комплекс по id
            {
                path: "/complex/:complexID",
                element: <CurrentComplex />,
                errorElement: <NotFoud />,
            },
            // Список квартир определенного дома
            {
                path: "/complex/:complexId/apartments/:houseID",
                element: <Apartaments />,
                errorElement: <NotFoud />,
            },
            // Справка / FAQ
            {
                path: "/faq",
                element: <FAQ />,
                errorElement: <NotFoud />,
            },

        ],
    },
]);

export const MainRouterProvider = () => <RouterProvider router={router} />;