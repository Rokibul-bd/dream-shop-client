import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <div>Home Page</div>
            },
            {
                path: '/products',
                element: <p>product page</p>
            }
        ]
    }
])

export default router 