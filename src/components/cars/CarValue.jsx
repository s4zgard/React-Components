import { useSelector } from "react-redux";

const CarValue = () => {
  const data = useSelector((state) => state.cars.data);
  const name = useSelector((state) => state.form.name);
  const search = useSelector((state) => state.cars.searchTerm);

  const totalCost = data
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .reduce((acc, car) => acc + car.cost, 0);
  return (
    <div className="p-4 relative mt-4 ">
      <div className="absolute right-0 bottom-0 border p-1 text-lg font-semibold">
        Total Value: ${totalCost}
      </div>
    </div>
  );
};

export default CarValue;
