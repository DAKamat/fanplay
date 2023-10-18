import Link from "next/link";
import Style from "./Footer.module.scss";

const FooterSite = () => {
  return (
    <div className={Style.FooterSiteCol}>
      <h3 className={`${"whiteColor"} ${Style.footerMenuTitle}`}>Site</h3>
      <ul className="menuLinkWrapper">
        <li>
          <Link href="#">Homepage</Link>
        </li>
        <li>
          <Link href="#">Partner with us</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSite;
