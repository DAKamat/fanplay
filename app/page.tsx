import Header from "../src/components/Header";
import BannerHero from "../src/components/BannerHero";
import "/src/styles/styles.scss";
import Footer from "@/components/Footer";
import FullWidthImage from "@/components/FullWidthImage";
import GridColumnContentWithImg from "@/components/GridColumnContentWithImg/GridColumnContentWithImg";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <BannerHero />
        <FullWidthImage />
        <GridColumnContentWithImg />
      </main>
      <Footer />
    </>
  );
}
