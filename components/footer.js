import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "./twitter_icon";
import FacebookIcon from "./facebook_icon";
import InstagramIcon from "./instagram_icon";
import LinkedInIcon from "./linkedin_icon";

export default function Footer() {
  const twitterProfileUrl = "https://twitter.com/YourTwitterUsername";
  const instagramProfileUrl = "https://instagram.com/talent_skool/";
  const facebookProfileUrl =
    "https://www.facebook.com/profile.php?id=100094082151522";
  const linkedinProfileUrl = "https://www.linkedin.com/company/talent-skool/";

  const handleTwitterButtonClick = () => {
    window.open(twitterProfileUrl, "_blank");
  };
  const handleInstagramrButtonClick = () => {
    window.open(instagramProfileUrl, "_blank");
  };
  const handleFacebookButtonClick = () => {
    window.open(facebookProfileUrl, "_blank");
  };
  const handleLinkedinButtonClick = () => {
    window.open(linkedinProfileUrl, "_blank");
  };

  return (
    <section className="mt-20 md:pt-30 bg-primary bg-no-repeat lg:bg-cover w-full overflow-hidden">
      <div className="relative flex justify-start md:justify-center md:items-end w-full">
        <div className="flex py-10 md:pt-20 px-4 md:px-6  xl:px-18 flex-col justify-start items-start md:justify-center md:items-center relative">
          <div className="flex flex-col items-start justify-around xl:justify-around xl:space-x-8 xl:flex-row pl-3">
            <div className="mt-12 xl:mt-0 grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-10 w-full md:w-auto sm:gap-x-10 md:gap-x-10 xl:gap-8">
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <Link
                  href="/"
                  className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white underline underline-offset-2"
                >
                  Talentskool
                </Link>
                <p className="text-white">
                  {" "}
                  Talent Skool is best e-Learning hub with different types of
                  courses.{" "}
                </p>
              </div>
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  Company
                </h2>
                <Link
                  href="/about"
                  className="text-left text-base hover:text-gray-400 leading-none text-gray-100"
                >
                  About Us
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-left text-base hover:text-gray-400 leading-none text-gray-100"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="text-left text-base hover:text-gray-400 leading-none text-gray-100"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  Quick Links
                </h2>
                <Link
                  href="/contact"
                  className="text-base text-left hover:text-gray-400 leading-none text-gray-100"
                >
                  Reach us
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-left hover:text-gray-400 leading-none text-gray-100"
                >
                  Enquire
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-left hover:text-gray-400 leading-none text-gray-100"
                >
                  Complaint
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-left hover:text-gray-400 leading-none text-gray-100"
                >
                  Leave a feedback
                </Link>
                <Link
                  href="/contact"
                  className="text-base leading-none text-white hover:text-gray-300"
                >
                  Security
                </Link>
              </div>
              <div className="cursor-pointer flex flex-col">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white justify-start">
                  Download
                </h2>
                <a
                  rel="noopener noreferrer"
                  className="cursor-pointer mt-8 w-fit px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 bg-black"
                >
                  <div className="w-10">
                    <Image
                      alt="install"
                      className="h-full w-full"
                      width={90}
                      height={90}
                      src="google-play-store-svgrepo-com.svg"
                    />
                  </div>
                  <div className="">
                    <div className="text-sm font-extrabold text-white">
                      Download on the
                    </div>
                    <div className="text-2xl text-white">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex md-flex-row flex-col w-full p-3 justify-between gap-4">
            <div className="relative flex xl:flex-row flex-col bottom-0 left-0">
              <p className="text-sm leading-none text-white">
                2023 TalentSkool &copy; All Rights Reserved
              </p>
            </div>

            <div className="absolute flex flex-row w-full md:w-auto space-x-6 right-0 bottom-0">
              <button
                className="text-white hover:text-gray-200 w-6"
                onClick={handleTwitterButtonClick}
              >
                <TwitterIcon />
              </button>
              <button
                className="text-white hover:text-gray-200 w-6"
                onClick={handleFacebookButtonClick}
              >
                <FacebookIcon />
              </button>
              <button
                className="text-white hover:text-gray-200 w-6"
                onClick={handleInstagramrButtonClick}
              >
                <InstagramIcon />
              </button>
              <button
                className="text-white hover:text-gray-200 w-6"
                onClick={handleLinkedinButtonClick}
              >
                <LinkedInIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
