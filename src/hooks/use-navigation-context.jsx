import { useContext } from "react";
import NavigationContext from "../context/navigation";
const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default useNavigationContext;
