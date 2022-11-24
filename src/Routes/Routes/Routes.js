import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Prodcuts from "../../Pages/SingleCataghories/Products/Prodcuts";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <p>product page</p>
            },
            {
                path: '/services/:id',
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Prodcuts></Prodcuts>
            }
        ]
    }
])

export default router 