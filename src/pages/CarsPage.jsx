import CarForm from "../components/cars/CarForm";
import CarList from "../components/cars/CarList";
import CarSearch from "../components/cars/CarSearch";
import CarValue from "../components/cars/CarValue";
const CarsPage = () => {
  document.title = "Cars Value";
  return (
    <div className=" container mx-auto flex flex-col justify-between">
      <div className="mb-3 text-xl text-gray-700 font-bold">
        Car Value Caculator Redux Toolkit
      </div>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default CarsPage;
