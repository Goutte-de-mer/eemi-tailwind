import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ButtonGradient = () => {
  return (
    <button className="px-5 py-3 whitespace-nowrap rounded-full gradient text-white font-medium shadow-lg shadow-indigo-500/50 hover:hover">
      Get started
      <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
    </button>
  );
};

export default ButtonGradient;
