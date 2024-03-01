import Button from "../components/Button";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const ButtonPage = () => {
  document.title = "Buttons";

  return (
    <div className="max-w-xl flex flex-wrap gap-2">
      <h2 className="text-xl font-bold m-1">
        Reusable Button component with different variants
      </h2>

      <Button primary>
        <GoChevronLeft className="text-lg" /> Button
      </Button>
      <Button secondary>Button</Button>
      <Button success>Button</Button>
      <Button warning>Button</Button>
      <Button danger>Button</Button>
      <Button primary outline>
        Button
      </Button>
      <Button secondary outline>
        Button
      </Button>
      <Button success outline>
        Button
      </Button>
      <Button warning outline>
        Button
      </Button>
      <Button danger outline>
        Button
      </Button>
      <Button danger rounded>
        Button
      </Button>
      <Button success outline rounded>
        Button
      </Button>
    </div>
  );
};

export default ButtonPage;
