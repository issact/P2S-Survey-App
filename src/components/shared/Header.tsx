import FacebookIcon from "@/components/icons/facebook";
import LinkedinIcon from "@/components/icons/linkedin";
import TwitterIcon from "@/components/icons/twitter";
import YoutubeIcon from "@/components/icons/youtube";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container z-50 relative">
      <nav className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold">
          <Link href="/"><Image src="/logo.svg" alt="Logo" width={231} height={55} className="max-md:w-[100px]" /></Link>
        </div>
        <div className="flex space-x-2">
          <Link href={"https://www.facebook.com/"}><FacebookIcon className="fill-[#8FA7BA] hover:fill-primary"/></Link>
          <Link href={"https://twitter.com/"}><TwitterIcon className="fill-[#8FA7BA] hover:fill-primary"/></Link>
          <Link href={"https://www.linkedin.com/"}><LinkedinIcon className="fill-[#8FA7BA] hover:fill-primary"/></Link>
          <Link href={"https://www.youtube.com/"}><YoutubeIcon className="fill-[#8FA7BA] hover:fill-primary"/></Link>
        </div>
      </nav>
      </header>
  );
}

export default Header;