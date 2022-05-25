import About from "../components/About";
import Location from "../components/Location";
import Insta from "../components/Insta"

const footerRoutes = [
  {
    path: '/about',
    navName: 'About',
    component: About,
  },
  {
    path: '/location',
    navName: 'Location',
    component: Location,
  },
  {
    path: 'https://www.instagram.com/brownbearpedals/',
    navName: 'Instagram',
    component: Insta,
  },
]

export default footerRoutes;