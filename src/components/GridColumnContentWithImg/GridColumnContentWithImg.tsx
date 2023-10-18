import Image from "next/image";
import { GridColumnContentWithImgData } from "./GridColumnContentWithImgData";
import { GridTwoColContentData } from "./GridTwoColContentData";
import Style from "./GridColumnContentWithImg.module.scss";
import PrimaryBtn from "../PrimaryBtn";
import GridTwoColContent from "../GridTwoColContent";

export const GridColumnContentWithImg = () => {
  const { Title, content, image, BtnText, BtnLink } =
    GridColumnContentWithImgData;
  return (
    <section className={Style.GridColumnContentWithImg}>
      <div
        className={`${"container"} ${Style.GridColumnContentWithImgContainer}`}
      >
        <h2>{Title}</h2>
        <div className={`${"row"} ${Style.GridColumnContentWithImgRow}`}>
          <div className={`${"col-sm-6"} ${Style.GridColumnImgCol}`}>
            <p className="blackColor">{content}</p>
            <div className="PrimaryBtnDiv">
              <PrimaryBtn BtnText={BtnText} BtnLink={BtnLink} />
            </div>
            <Image src={image} alt="image" />
          </div>
          <div className={`${"col-sm-6"} ${Style.GridColumnContentCol}`}>
            <GridTwoColContent columns={GridTwoColContentData.columns} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridColumnContentWithImg;
