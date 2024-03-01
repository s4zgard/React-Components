import { useState } from "react";

const useSort = (data, config) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = (label) => {
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //Updated Data
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    const flip = sortOrder === "asc" ? 1 : -1;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * flip;
      } else {
        return (valueA - valueB) * flip;
      }
    });
  }
  return { sortBy, sortOrder, sortedData, handleSort };
};

export default useSort;
