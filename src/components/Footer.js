import Logo from "./Logo";
import { menu } from "@/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const menuItems = menu.map((e, i) => {
    return (
      <li key={i}>
        <Link href={`/contact`}>{e}</Link>
      </li>
    );
  });
  return (
    <footer className="section mt-20 flex flex-col items-center justify-between gap-4 border-t-2 border-slate-400 px-10 pb-5 pt-10 sm:mt-32 sm:flex-row sm:pb-11 sm:pt-16">
      <Logo />
      <ul className="flex flex-col items-center gap-4 text-center text-sm font-medium sm:flex-row md:text-base">
        {menuItems}
      </ul>
      <div className="flex gap-4 text-purple">
        <button>
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
