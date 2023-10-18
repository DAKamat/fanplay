"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { bannerHeroData } from "./bannerHeroData";
import Style from "./BannerHero.module.scss";
import SecondaryBtn from "../SecondaryBtn";
import ThreeColGrid from "../ThreeColGrid";
import { ThreeColGridData } from "./ThreeColGridData";

export const BannerHero = () => {
  const {
    heroDesktop,
    heroMobile,
    Text,
    BtnText,
    BtnLink,
    imageDesktop,
    imageMobile,
  } = bannerHeroData;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 767) {
        setIsMobile(true);
      } else setIsMobile(false);
    });
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  return (
    <section className={Style.BannerHero}>
      <Image
        src={isMobile ? heroMobile : heroDesktop}
        alt="Banner Hero"
        className={Style.BannerHeroImg}
      />
      <div className={`${"container"} ${Style.BannerHeroContainer}`}>
        <div className={`${"row"} ${Style.BannerHeroRow}`}>
          <div className="col-sm-8">
            <h1>{Text}</h1>
            <SecondaryBtn BtnText={BtnText} BtnLink={BtnLink} />
            <ThreeColGrid columns={ThreeColGridData.columns} />
          </div>
          <div className={`${"col-sm-4"} ${Style.imageMobileCol}`}>
            <Image
              src={isMobile ? imageMobile : imageDesktop}
              alt="Mobile Image"
              className={Style.BannerMobileImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHero;
