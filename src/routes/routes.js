import HomeLayout from "../views/HomeLayout";
import Home from '../views/Home';
const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]
export default routes;