import { GoChevronLeft, GoChevronDown } from "react-icons/go";

import { useState } from "react";

const Accordion = ({ items }) => {
  const [showAccord, setShowAccord] = useState(null);

  const handleShow = (index) => {
    index = index === showAccord ? null : index;
    setShowAccord(index);
  };

  const renderedAccords = items.map((item, index) => {
    const isExpanded = index === showAccord;
    const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;
    return (
      <div className="max-w-2xl" key={item.id}>
        <div
          className="cursor-pointer border px-3 py-2 bg-gray-50 flex justify-between"
          onClick={() => handleShow(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="p-3 border">{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedAccords}</div>;
};

export default Accordion;
