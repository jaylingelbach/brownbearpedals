import About from "../components/About";
import Location from "../components/Location";
import Insta from "../components/Insta"

const footerRoutes = [
    {
        path: '/',
        navName: 'About',
        component: About,
      },
      {
        path: '/',
        navName: 'Location',
        component: Location,
      },
      {
        path: '/',
        navName: 'Instagram',
        component: Insta,
      },
]

export default footerRoutes;