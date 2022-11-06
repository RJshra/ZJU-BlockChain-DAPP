import Home from "../pages/Home";
import Tables from "../pages/Table";
import Person from "../pages/Person";
import Initate from "../pages/Initiate"
import IdentityProposal from "../pages/IdentityProposal"
import {Navigate} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/identityproposal',
        element: <IdentityProposal />
    },
    {
        path: '/table',
        element: <Tables />
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/person',
        element: <Person />,
    },
    {
        path:'/initate',
        element:<Initate />,
    },
    {
        path: '/',
        element: <Navigate to="/home"/>
    }
]