import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";
const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="relative border-b p-2 m-2 flex flex-col w-full justify-between">
      <h3 className="text-xl font-bold text-gray-700">My Cars</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-rows w-full justify-end"
      >
        <span className="">
          <label className="font-semibold">Search </label>
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            className="p-1 border border-gray-300 rounded"
          />
        </span>
      </form>
    </div>
  );
};

export default CarSearch;
