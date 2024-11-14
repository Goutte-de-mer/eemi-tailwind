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
    <div className="px-10 pt-16 pb-11 border-t-2 border-slate-400 mt-32 flex flex-col sm:flex-row justify-between max-w-[1000px] m-auto">
      <Logo />
      <ul className="flex flex-col sm:flex-row gap-4 font-medium">
        {menuItems}
      </ul>
      <div className="text-purple flex gap-4">
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Footer;
