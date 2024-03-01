import SortableTable from "../components/SortableTable";
const TablePage = () => {
  document.title = "Table";

  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Red", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-1 ${fruit.color} `}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold m-1">
        Reusable & Sortable Table component
      </h2>
      <SortableTable data={fruits} config={config} />
    </div>
  );
};

export default TablePage;
