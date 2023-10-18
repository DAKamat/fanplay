import Link from "next/link";
import Image from "next/image";
import FooterLogo from "/src/images/Logos/fanplayWhiteLogo.svg";
import Style from "./Footer.module.scss";
import FooterSocial from "./FooterSocial";
import FooterSite from "./FooterSite";
import FooterLegal from "./FooterLegal";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={`${"purpleColorBg"} ${Style.footerWrapper}`}>
      <div className={`${"container"} ${Style.footerContainer}`}>
        <div className={`${"row"} ${Style.footerRow}`}>
          <div className={`${"col-sm-8"} ${Style.colSm8}`}>
            <div className={Style.footerRightMenu}>
              <div className={Style.footerLogo}>
                <Link href="/">
                  <Image src={FooterLogo} alt="logo" />
                </Link>
              </div>
              <FooterSite />
              <FooterLegal />
            </div>
          </div>
          <div className={`${"col-sm-4"} ${Style.colSm4}`}>
            <FooterSocial />
            <p className={`${"perionGrey"} ${Style.copyrightWrapper}`}>
              Copyright {year} Fanplay All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
