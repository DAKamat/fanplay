import Link from "next/link";
import Style from "./PrimaryBtn.module.scss";
type BtnProps = {
  BtnText: string;
  BtnLink: string;
};
const PrimaryBtn = ({ BtnText, BtnLink }: BtnProps) => {
  return (
    <div className={Style.buttonWrapper}>
      <Link
        className={`${"primaryBtn"} ${Style.primaryBtn}`}
        href={BtnLink}
        target=""
      >
        {BtnText}
      </Link>
    </div>
  );
};

export default PrimaryBtn;
