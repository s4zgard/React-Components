import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ data, value, onChange }) => {
  const [toggle, setToggle] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setToggle(false);
      }
      return;
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOption = (option) => {
    setToggle(false);
    onChange(option);
  };
  const renderedData = data.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleOption(option)}
        className="p-1 hover:bg-sky-100 hover:rounded cursor-pointer"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={handleToggle}
        className="flex items-center justify-between cursor-pointer"
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {toggle && <Panel className="absolute top-full ">{renderedData}</Panel>}
    </div>
  );
};

export default Dropdown;
