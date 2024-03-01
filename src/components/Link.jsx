import useNavigationContext from "../hooks/use-navigation-context";
import classNames from "classnames";
const Link = ({ to, children, className, active }) => {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    "text-blue-500 cursor-pointer hover:border-l-4 hover:pl-2",
    className,
    to === currentPath && active
  );

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
