import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ButtonGradient = () => {
  return (
    <button className="gradient text-small hover:hover whitespace-nowrap rounded-full px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/50">
      Get started
      <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
    </button>
  );
};

export default ButtonGradient;
