import HomeLayout from "../views/HomeLayout";
import Home from '../views/Home';
import Page404 from '../views/page404';
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
    },
    {
        path: '*',
        element: <Page404 />
    }
]
export default routes;