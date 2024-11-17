import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonBorder = ({ text }) => {
  return (
    <button className="text-small group whitespace-nowrap rounded-full border border-purple px-5 py-3 font-medium text-purple">
      {text}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-4 transition-transform group-hover:translate-x-[6px]"
      />
    </button>
  );
};

export default ButtonBorder;
