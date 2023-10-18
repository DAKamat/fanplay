import Link from "next/link";
import Image from "next/image";
import Style from "./Footer.module.scss";
import DiscordLogo from "/src/images/Social/discord.svg";
import InstagramLogo from "/src/images/Social/instagram.svg";
import RedditLogo from "/src/images/Social/reddit.svg";
import TwitterLogo from "/src/images/Social/twitter.svg";

const FooterSocial = () => {
  return (
    <div className={Style.FooterSocialCol}>
      <ul className={Style.SocialLinks}>
        <li>
          <Link href="#" target="_blank">
            <Image src={InstagramLogo} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <Image src={DiscordLogo} alt="Discord" />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <Image src={TwitterLogo} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <Image src={RedditLogo} alt="Reddit" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
