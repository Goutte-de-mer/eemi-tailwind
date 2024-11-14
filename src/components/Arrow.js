import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Arrow = ({ icon }) => {
  return (
    <button className="w-12 h-12 text-purple border-2 border-purple rounded-full flex items-center justify-center">
      <FontAwesomeIcon icon={icon} size="lg" />
    </button>
  );
};

export default Arrow;
