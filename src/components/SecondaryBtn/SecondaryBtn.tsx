import Link from "next/link";
import Style from "./SecondaryBtn.module.scss";
type Btnprop = {
  BtnText: string;
  BtnLink: string;
};
const SecondaryBtn = ({ BtnText, BtnLink }: Btnprop) => {
  return (
    <div className={Style.buttonWrapper}>
      <Link
        className={`${"secondaryBtn"} ${Style.secondaryBtn}`}
        href={BtnLink}
        target=""
      >
        {BtnText}
      </Link>
    </div>
  );
};

export default SecondaryBtn;
