import Contact from '../components/faq';
import Faq from "../components/faq";
import Home from "../components/Home";
import HowItWorks from "../components/howItWorks";



const routes = [
  {
    path: '/',
    navName: 'Home',
    component: Home
  },
  {
    path: '/how-it-works',
    navName:'How it works',
    component: HowItWorks
  },
  {
    path: '/faq',
    navName: 'FAQ',
    component: Faq
  },
  {
    path: '/contact',
    navName:'Contact',
    component: Contact
  },
  
];
  
  export default routes;