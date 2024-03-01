import useNavigationContext from "../hooks/use-navigation-context";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();
  if (currentPath === path) {
    return children;
  }
  return null;
};

export default Route;
