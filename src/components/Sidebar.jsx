import Link from "./Link";
const Sidebar = () => {
  const links = [
    { label: "Accordion", path: "/" },
    { label: "Buttons", path: "/buttons" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
    { label: "Playlist", path: "/playlist" },
    { label: "Car Calc.", path: "/carscalculator" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        active="pl-2 border-l-4 border-blue-500 font-semibold"
        to={link.path}
        key={link.label}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
