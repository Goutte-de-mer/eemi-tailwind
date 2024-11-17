import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Arrow = ({ icon }) => {
  return (
    <button className="hover:hover flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple text-purple md:h-12 md:w-12">
      <FontAwesomeIcon icon={icon} className="text-small" />
    </button>
  );
};

export default Arrow;
