import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import PlaylistPage from "./pages/PlaylistPage";
import CarsPage from "./pages/CarsPage";

const App = () => {
  return (
    <div className="container mx-auto mt-4 grid grid-cols-6">
      <Sidebar />

      <div className="col-span-5">
        <Route path="/">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/playlist">
          <PlaylistPage />
        </Route>
        <Route path="/carscalculator">
          <CarsPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
