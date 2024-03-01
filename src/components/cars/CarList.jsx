import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../../store";

const CarList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cars.data);
  const name = useSelector((state) => state.form.name);
  const search = useSelector((state) => state.cars.searchTerm);

  const cars = data.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleDelete = (carID) => {
    dispatch(removeCar(carID));
  };
  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div
        className="flex flex-rows w-full mb-2 p-3 justify-between border shadow rounded"
        key={car.id}
      >
        <div className={`text-lg ${bold && "font-semibold"}`}>
          {car.name} - ${car.cost}
        </div>
        <button
          onClick={() => handleDelete(car.id)}
          className="px-2 py-1 bg-red-500 rounded text-white"
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{renderedCars}</div>;
};

export default CarList;
