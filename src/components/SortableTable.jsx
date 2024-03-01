import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import useSort from "../hooks/use-sort";
import Table from "./Table";
const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, handleSort } = useSort(data, config);

  const getIcons = (label, name, order) => {
    if (label !== sortBy || !sortOrder) {
      return <FaSort />;
    } else if (sortOrder === "asc") {
      return <FaSortUp />;
    } else if (sortOrder === "desc") {
      return <FaSortDown />;
    }
  };
  //Updated Config
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-sky-100"
          onClick={() => handleSort(column.label)}
        >
          <div className="flex items-center gap-x-1">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
