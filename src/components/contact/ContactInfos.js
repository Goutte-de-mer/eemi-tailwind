import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const ContactInfos = () => {
  return (
    <div className="gradient rounded-xl px-5 py-8 text-white md:max-w-[35%] md:px-12">
      <h2 className="mb-3 text-xl font-bold md:text-2xl">
        Contact Information
      </h2>
      <p className="mb-8 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste
        quis.
      </p>
      <div className="flex flex-col gap-y-5">
        <Link href={"tel: 0612345678"} className="flex items-center gap-x-5">
          <FontAwesomeIcon icon={faPhone} />
          <p>0612345678</p>
        </Link>
        <Link
          href={"mailto: fake.email@email.com"}
          className="flex items-center gap-x-5"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <p>fake.email@email.com</p>
        </Link>
        <div className="flex items-center gap-x-5">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Somewhere, Earth</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfos;
