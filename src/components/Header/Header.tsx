import Link from "next/link";
import Image from "next/image";
import { navData } from "./navbarData";
import Style from "./Header.module.scss";
import PrimaryBtn from "../PrimaryBtn";

const Header = () => {
  const { navImage, BtnText, BtnLink } = navData;
  return (
    <div className={Style.headerWrapper}>
      <div className={Style.headerContainer}>
        <div className={`${"row"} ${Style.headerRow}`}>
          <div className="col-sm-3">
            <Link href="/">
              <Image src={navImage} alt="logo" className={Style.logo} />
            </Link>
          </div>
          <div className="col-sm-9">
            <PrimaryBtn BtnText={BtnText} BtnLink={BtnLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
