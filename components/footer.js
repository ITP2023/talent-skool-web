
import TwitterIcon from "./twitter_icon";
import FacebookIcon from "./facebook_icon";

export default function Footer() {
  return (
    <section className="mt-20 md:pt-30 bg-primary bg-no-repeat lg:bg-cover w-full max-w-screen">
      <div className="relative flex justify-start md:justify-center md:items-end w-full">
        <div className="flex py-14 md:pt-28 px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
          <div className="flex flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
            <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white underline underline-offset-2">
                  Talentskool
                </h2>
                <p className="text-white">
                  {" "}
                  Talent Skool is best e-Learning hub with different types of
                  courses.{" "}
                </p>
              </div>
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  Courses
                </h2>
                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                  App Design
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                  Web Design
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                  Creative Writing
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                  Sports
                </button>
                <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                  Fashion Design
                </button>
              </div>
              <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  Company
                </h2>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  About Us
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  Reach us
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  Enquire
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  Complaint
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  Leave a feedback
                </button>
                <button className="text-base leading-none text-white hover:text-gray-300">
                  Terms of service
                </button>
                <button className="text-base leading-none text-white hover:text-gray-300">
                  Privacy Policy
                </button>
                <button className="text-base leading-none text-white hover:text-gray-300">
                  Security
                </button>
              </div>
            </div>
          </div>
          <div className="flex xl:justify-between xl:flex-row flex-col items-center xl:items-start w-full ">
            <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">
              2023 TalentSkool &copy; All Rights Reserved
            </p>
            <div className="flex justify-center md:justify-end items-start mt-10 w-full md:w-auto md:items-center space-x-6 ">
              <button className="text-white hover:text-gray-200 w-6">
                <TwitterIcon />
              </button>
              <button className="text-white hover:text-gray-200 w-6">
                <FacebookIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
