import HomeLayout from "../views/HomeLayout";
import Home from '../views/Home';
import Page404 from '../views/page404';
import CreateNewProgram from '../views/createnewprogram';
import ExercisePickScreen from "../views/ExercisePickScreen";
import ShowProgramScreen from "../views/showProgramScreen";

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Page404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'CreateNewProgram',
                element: <CreateNewProgram />
            },
            {
                path: 'ShowProgramScreen',
                element: <ShowProgramScreen/>
            },  
            {
                path: 'ExercisePickScreen',
                element: <ExercisePickScreen/>
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]
export default routes;