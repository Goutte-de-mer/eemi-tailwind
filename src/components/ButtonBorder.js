import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonBorder = ({ text }) => {
  return (
    <button className="px-5 py-3 rounded-full whitespace-nowrap text-purple font-medium border border-purple hover:hover">
      {text}
      <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
    </button>
  );
};

export default ButtonBorder;
