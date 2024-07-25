import Article from "../components/pages/Article";
import Home from "../components/pages/Home";
import Project from "../components/pages/Project";
import Work from "../components/pages/Work";

export const navItems = [
  { label: "HOME", path: "/", component: Home },
  { label: "PROJECTS", path: "/projects", component: Project },
  { label: "ARTICLES", path: "/articles", component: Article },
  { label: "WORK", path: "/work", component: Work },
];
