import { Layout } from 'components/Layout';
import { AboutPage } from 'pages/AboutPage';

export const routes = [
  {
    path: "/",
    exact: true,
    component: Layout,
  },
  {
    path: "/chats/:id",
    exact: true,
    component: Layout,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  }
]