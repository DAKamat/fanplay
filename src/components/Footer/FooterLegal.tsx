import Link from "next/link";
import Style from "./Footer.module.scss";

const FooterLegal = () => {
  return (
    <div className={Style.FooterLegalCol}>
      <h3 className={`${"whiteColor"} ${Style.footerMenuTitle}`}>Legal</h3>
      <ul className="menuLinkWrapper">
        <li>
          <Link href="#">Terms & Conditions</Link>
        </li>
        <li>
          <Link href="#">Privacy Policy</Link>
        </li>
        <li>
          <Link href="#">Responsible Gambling</Link>
        </li>
        <li>
          <Link href="#">Security Audit</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLegal;
