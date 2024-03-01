import { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = (option) => {
    setSelected(option);
  };

  const colors = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];
  document.title = "DropDown";

  return (
    <div>
      <h2 className="text-xl font-bold m-1">Reusable Dropdown component</h2>
      <Dropdown data={colors} value={selected} onChange={handleChange} />
    </div>
  );
};

export default DropdownPage;
