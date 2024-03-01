import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addCar } from "../../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  const handleName = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCost = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(changeCost(value));
  };

  return (
    <div className="flex flex-col p-2">
      <h3 className="text-xl text-gray-700 font-bold">Add Car</h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-2 border p-2 justify-between rounded shadow w-full"
      >
        <div className="mr-2">
          <label>Name</label>
          <input
            value={name}
            onChange={handleName}
            type="text"
            required
            className="border ml-2 rounded border-gray-300 px-2 py-1"
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            value={cost || ""}
            onChange={handleCost}
            type="number"
            required
            className="border ml-2 rounded border-gray-300 px-2 py-1"
          />
        </div>
        <button className="px-2 py-1 bg-sky-400 text-white rounded">Add</button>
      </form>
    </div>
  );
};

export default CarForm;
