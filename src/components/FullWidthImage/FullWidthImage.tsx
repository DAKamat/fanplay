"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Style from "./FullWidthImage.module.scss";
import imageDesktop from "/src/images/FullWidthImage/FullWidthImageDesktop.png";
import imageMobile from "/src/images/FullWidthImage/FullWidthImageMobile.png";

export const FullWidthImage = () => {
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
    <section className={Style.FullWidthImage}>
      <Image src={isMobile ? imageMobile : imageDesktop} alt="Image" />
    </section>
  );
};

export default FullWidthImage;
