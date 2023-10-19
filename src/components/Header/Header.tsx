"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "./navbarData";
import Style from "./Header.module.scss";
import PrimaryBtn from "../PrimaryBtn";

const Header = () => {
  const { Logo, MobileLogo, BtnText, BtnLink } = navData;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setIsMobile(true);
      } else setIsMobile(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  return (
    <div className={Style.headerWrapper}>
      <div className={Style.headerContainer}>
        <div className={`${"row"} ${Style.headerRow}`}>
          <div className={`${"col-sm-3"} ${Style.headerContainercol}`}>
            <Link href="/">
              <Image
                src={isMobile ? MobileLogo : Logo}
                alt="logo"
                className={Style.logo}
              />
            </Link>
          </div>
          <div className={`${"col-sm-9"} ${Style.headerContainercol}`}>
            <PrimaryBtn BtnText={BtnText} BtnLink={BtnLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
