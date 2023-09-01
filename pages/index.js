import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CancelIcon from "@/components/cancel_icon";
import EmailIcon from "@/components/email_icon";
import PrevIcon from "@/components/prev_icon";
import NextIcon from "@/components/next_icon";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseMod";
import CountUp from "@/components/countup";

const DeviceMockup = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <Image
          width={300}
          height={450}
          src="/app_home_screen.jpg"
          className="dark:hidden w-[272px] h-[572px]"
          alt=""
        />
      </div>
    </div>
  );
};

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/+917550116864"
      className="fixed z-50 bottom-2 right-2 bg-green-400 rounded-full w-20 h-20"
    >
      <Image
        width={50}
        height={50}
        className="text-center my-4 mx-auto"
        src="/whatsapp.png"
        alt="Whatsapp"
      />
    </a>
  );
};

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className="flex flex-row w-full space-x-4 justify-between">
        <div className="flex flex-row space-x-4">
          <span className="inline-block text-white text-center px-2 py-1 font-semibold rounded-full w-[2.5em] h-[2.5em] bg-primary">
            {idx + 1}
          </span>
          <h4 className="pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {faqsList.q}
          </h4>
        </div>
        <div className="cursor-pointer">
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="flex flex-row justify-center space-x-4 ml-16">
          <div className="w-1 bg-primary"> </div>

          <p className="text-gray-500 w-full">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-full-xl mt-40 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl text-gray-800 font-bold font-sans">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
      <p className="mx-auto text-center mt-6">
        Still have a question?{" "}
        <Link
          href="/contact"
          className="underline decoration-primary underline-offset-4"
        >
          Contact Us
        </Link>
      </p>
    </section>
  );
};

const TestimonialCard = ({ className, testimonial }) => {
  return (
    <div key={testimonial.id} className={className}>
      <div className="relative top-0 left-0 opacity-40">
        <Image
          width={50}
          height={50}
          className="w-9 h-9 rounded-full"
          src="/quote_up.png"
          alt="quote up"
        />
      </div>

      <div className="grow mb-8 text-gray-500 text-xl italic leading-relaxed dark:text-gray-400">
        <p className="my-4 px-4 md:w-full h-full">{testimonial.review}</p>
      </div>
      <div className="relative opacity-40">
        <div className="absolute bottom-0 right-0">
          <Image
            width={50}
            height={50}
            className="w-9 h-9 rounded-full"
            src="/quote_down.png"
            alt="quote down"
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <Image
          width={50}
          height={150}
          className="w-9 h-9 rounded-full"
          src="/ai_person.png"
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{testimonial.name}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
            {testimonial.job}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @param {{ testimonialData: TestimonialCardData[] }} param0
 * @returns
 */
const TestimonialsSection = ({ testimonialData }) => {
  // const scrollContainerRef = useRef(null);
  const [tab, setTab] = useState(0);
  const [len, setLen] = useState(testimonialData.length);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);
  const handleNextTab = () => {
    setTab((prev) => (prev !== len ? prev + 1 : 0));
  };

  const handlePrevTab = () => {
    setTab((prev) => (prev !== 0 ? prev - 1 : len));
  };
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth < 1060);
      setIsSmScreen(window.innerWidth < 768);
      setLen(testimonialData.length - (isMdScreen ? 1 : 3));
    };

    checkScreenSize(); // Initial check

    // Attach an event listener to update the screen size and length when the window is resized
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMdScreen]);

  return (
    <section className=" mt-24 w-full max-w-full mx-auto">
      <p className="mx-auto my-8 text-center text-4xl font-bold font-sans">
        Here&apos;s what our users say about us
      </p>
      <div className="flex flex-row justify-evenly items-center w-full md:mx-auto h-full">
        <span
          className="cursor-pointer absolute p-4 shadow-lg z-10 text-center w-auto h-auto left-0 rounded-full bg-gray-50"
          onClick={() => handlePrevTab()}
        >
          <PrevIcon width={15} height={15} />
        </span>
        <span
          className="cursor-pointer absolute p-4 shadow-lg z-10 text-right w-auto h-auto right-0 rounded-full bg-gray-50"
          onClick={() => handleNextTab()}
        >
          <NextIcon width={15} height={15} />
        </span>
        <div className="w-[325px] md:w-full ml-auto mr-auto overflow-hidden">
          <div
            className={`flex flex-row w-[90%] md:w-[90%] items-center transition-transform duration-300 gap-24 pl-2 md:gap-20 ml-auto mr-auto`}
            style={{
              transform: `translateX(-${
                tab * (isSmScreen ? 370 : isMdScreen ? 399 : 490)
              }px)`,
              // width: `${
              //   Math.ceil(testimonialData.length) * (isMdScreen ? 350 : 32)
              // }px`,
            }}
          >
            {testimonialData.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                id={i}
                className="w-[275px] h-[500px] md:h-[450px] md:w-[400px] border flex flex-col flex-shrink-0 items-center text-center bg-gray-50 dark:bg-gray-800 dark:border-gray-700 p-6 rounded-xl "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const _SKILL_ICONS = [
  "/piano.png",
  "/artandcrafts.png",
  "/chess.png",
  "/violin.png",
  "/writing.png",
  "/suitcase.png",
  "/salary.png",
  "/education.png",
  "/graphic-design.png",
  "/film-slate.png",
];
const HeroSection = () => {
  return (
    <div className="bg-black h-[600px] lg:h-[900px]">
      <DesktopHeroBanner />
      <section className="lg:hidden bg-black text-white w-full h-full">
        <div className="relative top-28 opacity-60 w-full h-2/12">
          <div className="relative flex overflow-x-hidden">
            <div
              className={`flex flex-row animate-marqueereverse lg:animation-none whitespace-nowrap`}
            >
              {_SKILL_ICONS.map((l, i) => (
                <span key={i} className="w-[3rem] lg:w-[6rem] mx-4 text-4xl">
                  <Image alt="skill" width={100} height={100} src={l} />
                </span>
              ))}
            </div>
            <div className="flex flex-row absolute top-0 animate-marquee2reverse lg:animation-none whitespace-nowrap">
              {_SKILL_ICONS.map((l, i) => (
                <span key={i} className="w-[3rem] lg:w-[6rem] mx-4 text-4xl">
                  <Image alt={"skill"} width={100} height={100} src={l} />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative top-28 w-full px-4 py-10 my-auto mx-auto">
          <div className="mx-auto animation-bottom2top w-11/12 my-auto">
            <h1 className="text-3xl text-bold md:text-5xl text-center mx-auto leading-relaxed tracking-tight">
              Join a community that values and harnesses the unique{" "}
              <span className="before:block before:absolute before:-inset-[0.2rem] before:-skew-y-3 before:bg-primary relative inline-block">
                <span className="relative text-white">talents.</span>
              </span>{" "}
            </h1>
          </div>
          <a
            rel="noopener noreferrer"
            className="cursor-pointer mt-8 w-fit mx-auto px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 bg-black"
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
          <div className="mx-auto w-full text-center">
            <button className="mx-auto p-4 bg-black border-2 border-primary w-1/2 rounded-lg mt-8 leading-relaxed">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const DesktopHeroBanner = () => {
  return (
    <section className="hidden lg:block w-full h-[900px] bg-black">
      {/* <div className="bg-black w-full h-full"> */}

      <div
        id="wrapper"
        className="flex flex-row justify-between w-full h-full mb-5"
      >
        <div className="mt-32 text-white w-1/2 p-4">
          <p className="text-5xl my-8">
            Join a community that values and harnesses the unique{" "}
            <span className="text-primary">talents</span>
            {""}.
          </p>
          <div className="flex flex-row space-x-4">
            <button className="p-4 bg-black shadow-neon rounded-full flex flex-row gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                fontSize="24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
              </svg>
              Download on the Google Play
            </button>
            <button className="p-4 bg-primary text-white rounded-full">
              Get Started by signing up
            </button>
          </div>
        </div>
        <DeviceMockup />
      </div>
      {/* </div> */}
      <div className="top-[-200px] relative opacity-60 w-full h-2/12">
        <div className="relative flex overflow-x-hidden">
          <div
            className={`flex flex-row animate-marqueereverse lg:animation-none whitespace-nowrap`}
          >
            {_SKILL_ICONS.map((l, i) => (
              <span key={i} className="w-[3rem] lg:w-[6rem] mx-4 text-4xl">
                <Image alt="skill" width={100} height={100} src={l} />
              </span>
            ))}
          </div>
          <div className="flex flex-row absolute top-0 animate-marquee2reverse lg:animation-none whitespace-nowrap">
            {_SKILL_ICONS.map((l, i) => (
              <span key={i} className="w-[3rem] lg:w-[6rem] mx-4 text-4xl">
                <Image alt={"skill"} width={100} height={100} src={l} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
/**
 *
 * @param {{
 *   direction: "ltr" | "rtl";
 *    head: string;
 *    description: string;
 *    statone: string;
 *    stattwo: string;
 *    statthree: string;
 *    color: string;
 *    imgsrc: string
 * }} param0
 */
const FeatureCard = ({
  direction,
  head,
  description,
  statone,
  stattwo,
  statthree,
  color,
  imgsrc,
}) => {
  const countUpRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: [0.2, 0.8],
  });

  return (
    <div
      style={{
        background: color,
      }}
      className={`flex flex-col ${
        direction === "ltr" ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center justify-center h-full w-full sm:w-3/4 rounded-2xl py-4`}
    >
      <div
        ref={ref}
        className={`w-500 h-500 bg-transperant flex-shrink-0 p-4 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        {/* Image here */}
        <Image
          width={200}
          height={200}
          src={imgsrc}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        ref={ref}
        className={`px-8 flex flex-col ${
          inView ? "animate-fade-in-right" : "opacity-0"
        }`}
      >
        <p className="text-3xl font-bold mb-2 text-white text-center lg:text-left">
          {head}
        </p>
        <p className="text-white text-center lg:text-left my-2 lg:my-auto px-2">
          {description}
        </p>
        <div className="mt-4 flex flex-row justify-evenly lg:justify-start">
          <button
            className={`rounded-lg ${
              color === "black" ? "bg-white" : "bg-black"
            } ${
              color === "black" ? "text-black" : "text-white"
            } px-4 py-2 mx-2`}
          >
            Learn with us
          </button>
          <button
            className={`rounded-lg ${
              color === "black" ? "bg-white" : "bg-black"
            } ${
              color === "black" ? "text-black" : "text-white"
            } px-4 py-2 mx-2`}
          >
            Explore us
          </button>
        </div>
        <div className="mt-4 flex flex-row justify-evenly lg:justify-start">
          <div className="p-2 mr-2 text-center">
            <p className="text-2xl text-center font-bold text-orange-500">
              <CountUp
                ref={countUpRef}
                initial={0}
                end={20}
                skip={1}
                inView={inView}
              />
            </p>
            <p className="text-white whitespace-wrap">{statone}</p>
          </div>
          <div className="p-2 mr-2 text-center">
            <p className="text-2xl text-center font-bold text-orange-500">
              <CountUp
                ref={countUpRef}
                initial={0}
                end={2000}
                skip={100}
                inView={inView}
              />
            </p>
            <p className="text-white whitespace-wrap">{stattwo}</p>
          </div>
          <div className="p-2 text-center">
            <p className="text-2xl text-center font-bold text-orange-500">
              <CountUp
                ref={countUpRef}
                initial={0}
                end={30}
                skip={1}
                inView={inView}
              />
            </p>
            <p className="text-white whitespace-wrap">{statthree}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @param {{data: CourseCardData, className: string, onMouseEnter: import("react").MouseEventHandler<HTMLDivElement>, onMouseLeave: import("react").MouseEventHandler<HTMLDivElement>}} param0
 * @returns
 */
const CourseCard = ({
  data: {
    thumbnail_url,
    category,
    title,
    job_title,
    description,
    instructor,
    date_of_release,
  },
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {/* Image */}
      <div className="mb-2">
        <Image
          width={300}
          height={170}
          src={thumbnail_url}
          alt="Image"
          className="w-full h-70 rounded-xl"
        />
      </div>

      {/* Date and Category */}
      <div className="flex items-center mb-2 w-full justify-start gap-4 my-4">
        <div className="mr-2">Mar 20, 2023</div>
        <div className="bg-gray-100 px-4 py-1 rounded-2xl hover:cursor-pointer hover:bg-gray-300">
          {category}
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">{title}</h1>

      {/* Random text paragraph */}
      <p className="text-left w-full mb-2">{description}</p>

      {/* Author */}
      <div className="flex mt-6">
        <div className="w-12 h-12 rounded-full bg-gray-400 mr-2"></div>
        <div className="text-left">
          <div className="font-semibold">{instructor}</div>
          <div className="text-gray-600">{job_title}</div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param {{
 * videoPath: string;
 * courseCardData: CourseCardData[]
 * }} param0
 * @returns
 */
const CourseDemo = ({ videoPath, courseCardData }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="w-full mx-auto py-8 my-16">
      <p className="mx-auto text-center text-3xl my-16 font-bold font-sans">
        Some courses on our platform
      </p>
      <div className="h-auto w-full">
        <div className="relative h-full flex overflow-x-hidden">
          <div
            className={`flex flex-row animate-coursemarquee ${
              hovering ? "pause-animation" : "play-animation"
            }`}
          >
            {courseCardData.map((l, i) => (
              <CourseCard
                key={i}
                data={l}
                onMouseEnter={(e) => {
                  setHovering(true);
                }}
                onMouseLeave={(e) => {
                  setHovering(false);
                }}
                className="border-2 mx-4 w-[25rem] md:justify-evenly border flex flex-col items-center text-center dark:border-gray-700 p-6 rounded-xl hover:w-[28rem] "
              />
            ))}
          </div>

          <div
            className={`absolute flex flex-row top-0 animate-coursemarquee2 ${
              hovering ? "pause-animation" : "play-animation"
            }`}
          >
            {courseCardData.map((l, i) => (
              <CourseCard
                key={i}
                data={l}
                onMouseEnter={(e) => {
                  setHovering(true);
                }}
                onMouseLeave={(e) => {
                  setHovering(false);
                }}
                className="border-2 mx-4 w-[25rem] md:justify-evenly border flex flex-col items-center text-center dark:border-gray-700 p-6 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LoadingSpinner = ({ opacity }) => {
  return (
    <div role="status" className={`opacity-${opacity} z-9`}>
      <svg
        aria-hidden="true"
        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 stroke-2 opacity-100"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const CTAModal = ({ display, setDisplay }) => {
  const [err, setErr] = useState("");

  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  function validateName(name) {
    const nameRegex = /^[A-Za-z\s]{4,}$/;
    return nameRegex.test(name);
  }
  // Phone number validation function
  function validatePhoneNumber(phoneNumber, countryCode) {
    // Remove non-numeric characters
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    console.log(cleanNumber);
    // Define regular expressions for each country
    const countryFormats = {
      US: /^\d{10}$/,
      UK: /^\d{10}$/,
      FR: /^\d{9}$/,
      DE: /^\d{10}$/,
      JP: /^\d{10}$/,
      CN: /^\d{11}$/,
      BR: /^\d{11}$/,
      IN: /^\d{10}$/,
      RU: /^\d{10}$/,
      AU: /^\d{9}$/,
      AF: /^\d{8,10}$/,
      MV: /^\d{7}$/,
      BD: /^\d{10}$/,
      NP: /^\d{9}$/,
      LK: /^\d{9}$/,
      BT: /^\d{8}$/,
      MM: /^\d{8}$/,
      MY: /^\d{9,10}/,
      SA: /^\d{9}/,
      AE: /^\d{9}/,
      EG: /^\d{10}/,
      IQ: /^\d{10}/,
      JO: /^\d{9}/,
      KW: /^\d{8}/,
      LB: /^\d{7}/,
      OM: /^\d{8}/,
      QA: /^\d{8}/,
      TN: /^\d{7}/,
      // Add more countries and their regex patterns here
    };

    // Validate based on the provided country code
    if (countryCode in countryFormats) {
      if (countryCode in countryFormats) {
        const pattern = countryFormats[countryCode];
        console.log(pattern.test(cleanNumber));
        if (pattern.test(cleanNumber)) {
          // Clear any existing error messages if validation passed
          setErr(""); // Make sure setErr is defined and clears the error state
          return true;
        } else {
          setErr("Enter a valid phone number with the correct format.");
          return false;
        }
      } else {
        setErr("Select a valid country code.");
        return false;
      }
    }
  }

  const sendCustomerDetails = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, countryCode } = customerData;
    console.log(err);
    console.log(customerData);
    if (!validateName(name)) {
      console.log(name);
      setErr("Name should have only Alphabets and minimum of 4.");
      return;
    }
    if (!email) {
      setErr("Please enter your email");
      return;
    }

    if (!validatePhoneNumber(phoneNumber, countryCode)) {
      return;
    }

    if (!countryCode) {
      setErr("Please enter your country Code");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "/customerData"), {
        name,
        email,
        phoneNumber: countryCode + phoneNumber,
      });
      setSuccess(true);
      console.log(success);
    } catch (e) {
      setErr(e.message);
    }
    setLoading(false);
  };
  const countriesCode = [
    {
      country: "Select",
      value: "None",
      code: "",
    },
    {
      country: "India",
      value: "IN",
      code: "+91",
    },
    {
      country: "US",
      value: "US",
      code: "+1",
    },
    {
      country: "UK",
      value: "UK",
      code: "+44",
    },
    {
      country: "France",
      value: "FR",
      code: "+33",
    },
    {
      country: "Germany",
      value: "DE",
      code: "+49",
    },
    {
      country: "Brazil",
      value: "BR",
      code: "+55",
    },
    {
      country: "Australia",
      value: "AU",
      code: "+61",
    },
    {
      country: "Russia",
      value: "RU",
      code: "+7",
    },
    {
      country: "Japan",
      value: "JP",
      code: "+81",
    },
    {
      country: "Bangladesh",
      value: "BD",
      code: "+880",
    },
    {
      country: "SriLanka",
      value: "LK",
      code: "+94",
    },
    {
      country: "Bhutan",
      value: "BT",
      code: "+975",
    },
    {
      country: "Myanmar",
      value: "MM",
      code: "+95",
    },
    {
      country: "Afganistan",
      value: "AF",
      code: "+93",
    },
    {
      country: "Maldives",
      value: "MV",
      code: "+960",
    },
    {
      country: "Malaysia",
      value: "MY",
      code: "+60",
    },

    {
      country: "Saudi",
      value: "SA",
      code: "+966",
    },
    {
      country: "UAE",
      value: "AE",
      code: "+971",
    },
    {
      country: "Egypt",
      value: "EG",
      code: "+20",
    },
    {
      country: "Jordan",
      value: "JO",
      code: "+962",
    },
    {
      country: "Kuwait",
      value: "KW",
      code: "+965",
    },
    {
      country: "Lebanon",
      value: "LB",
      code: "+961",
    },
    {
      country: "Oman",
      value: "OM",
      code: "+968",
    },
    {
      country: "Qatar",
      value: "QA",
      code: "+974",
    },
    {
      country: "Tunisia",
      value: "TN",
      code: "+216",
    },
  ];

  return display ? (
    <div className="fixed inset-0 z-20 overflow-hidden w-fulls shadow-neon">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40 z-10"
        onClick={() => setDisplay(false)}
      ></div>
      <div className="flex z-30 items-center min-h-screen px-4 py-8">
        <div
          className={`${
            success ? "" : "hidden"
          } relative z-2 w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-neon bg-gradient-to-br from-fuchsia-400 via-blue-300 to-slate-50`}
        >
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setDisplay(false)}
            >
              <CancelIcon />
            </button>
          </div>
          <div className="bg-white dark:bg-dark flex flex-col items-center justify-between space-y-6 h-auto p-6 rounded-xl mx-auto">
            <div className="h-1/2 w-full">
              <Image
                alt="icon_success"
                width={100}
                height={100}
                src="/check.png"
                className="w-[100px] h-[100px] mx-auto"
              />
            </div>

            <div className="h-1/2 w-full">
              <p className="text-2xl dark:text-white font-bold text-center">
                Success!
              </p>
              <p className="mt-4 dark:text-white text-center">
                We&apos;ve created your account and will notify you when we
                launch
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${
            success ? "hidden" : ""
          } relative z-40 w-full max-w-lg p-4 mx-auto bg-gradient-to-br from-fuchsia-400 via-blue-300 to-slate-50 rounded-md shadow-neon bg-gradient-to-br from-fuchsia-400 via-blue-300 to-slate-50`}
        >
          <div
            className={`${
              loading ? "opacity-100 " : "hidden "
            }absolute z-40 w-full h-full flex flex-row justify-center items-center bg-white/60 rounded-lg -ml-4 -mt-4`}
          >
            <LoadingSpinner opacity={loading ? 100 : 0} />
          </div>
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setDisplay(false)}
            >
              <CancelIcon />
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-4 text-center">
            <h4 className="text-3xl font-medium text-gray-800">
              Get notified when we launch
            </h4>
            <p className="text-md text-gray-600">
              Sign Up and we&apos;ll notify you when we launch{"!"}
            </p>
            <form onSubmit={sendCustomerDetails}>
              <div className="my-4 z-2">
                <input
                  onChange={(e) =>
                    setCustomerData(({ phoneNumber, countryCode, email }) => ({
                      name: e.target.value,
                      email,
                      phoneNumber,
                      countryCode,
                    }))
                  }
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className={`text-gray-500 w-full px-3 py-2 rounded-lg border outline-none focus:border-indigo-600 shadow-sm`}
                />
              </div>
              <div className="block my-4">
                <div className={`relative z-2 my-4`}>
                  <div className="absolute left-3 top-2 my-auto h-6 flex items-center border-r pr-2">
                    <select
                      required
                      onChange={(e) =>
                        setCustomerData(({ name, phoneNumber, email }) => ({
                          name,
                          phoneNumber,
                          email,
                          countryCode: e.target.value,
                        }))
                      }
                      name="country"
                      className="text-sm bg-white outline-none rounded-lg h-full overflow-y-auto"
                    >
                      {countriesCode.map((country, index) => (
                        <option
                          key={index}
                          index={index}
                          value={country.value}
                        >{`${country.country} ${country.code}`}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    onInput={(e) =>
                      setCustomerData(({ email, name, countryCode }) => ({
                        phoneNumber: e.target.value,
                        email,
                        name,
                        countryCode,
                      }))
                    }
                    name="phone"
                    type="text"
                    placeholder="Phone number"
                    required
                    className="text-gray-500 w-full pl-[9.5rem] pr-3 py-2 rounded-lg border outline-none focus:border-indigo-600 shadow-sm"
                  />
                  <p className="hidden text-red-500 peer-invalid:block">
                    Please enter a valid phone number
                  </p>
                </div>
              </div>
              <div className="my-4 block">
                <label className="relative z-2 my-4">
                  <EmailIcon className="w-6 h-6 text-gray-400 absolute left-3 my-auto top-0" />
                  <input
                    type="email"
                    onChange={(e) =>
                      setCustomerData(({ name, phoneNumber, countryCode }) => ({
                        email: e.target.value,
                        phoneNumber,
                        name,
                        countryCode,
                      }))
                    }
                    placeholder="Enter your email"
                    className="peer w-full pl-12 pr-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg invalid:border-red-500"
                  />
                  <p className="invisible text-red-500 peer-invalid:visible">
                    Please enter a valid email
                  </p>
                </label>
              </div>
              <button
                type="submit"
                className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-black active:bg-primary rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2 shadow-neon"
              >
                Notify Me
              </button>
            </form>
            <div
              className={`${
                err !== "" ? "" : "hidden"
              } text-center px-2 py-2 text-red-600 mx-auto`}
            >
              {err}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

const CTASection = ({ setDisplay }) => {
  return (
    <section className="w-full h-auto mt-10 mb-20 ">
      <div
        className="w-11/12 py-8 px-4 rounded-lg bg-cover bg-no-repeat bg-center p-0 m-0 overflow-hidden hide-scrollbar mx-auto flex flex-col"
        style={{ backgroundImage: `url('/back2.jpeg')` }}
      >
        <p className="text-2xl text-white text-center">
          Get Notified when we launch
        </p>
        <p className="text-white text-center my-4">
          Sign Up and we&apos;ll notify you when we launch.
        </p>
        <div className="mx-auto w-auto">
          <button
            onClick={() => setDisplay(true)}
            className="bg-white py-2 px-4 mt-4 rounded-lg text-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};
/**
 *
 * @typedef {{ date_of_release: string, category: string, title: string, description: string, instructor: string, job_title: string, thumbnail_url: string }} CourseCardData
 * @typedef {{
 * id: number,
 * review: string,
 * avatar: string,
 * job: string,
 * name: string
 * }} TestimonialCardData
 * @param {{ videoPath: string, courseCardData: CourseCardData[], testimonialData: TestimonialCardData[] }} param0
 * @returns
 */
export default function Home({ videoPath, courseCardData, testimonialData }) {
  const [ctaModalShown, setCTAModalDisplay] = useState(true);

  return (
    <>
      <Head>
        <title>Welcome to TalentSkool</title>
      </Head>
      {/* <div className="w-screen h-full fixed z-50 inset-0 bg-black opacity-40" /> */}
      <CTAModal display={ctaModalShown} setDisplay={setCTAModalDisplay} />
      <div className="bg-black">
        <Navbar />
      </div>
      <HeroSection />
      <WhatsAppFAB />
      {/* <HeroBanner /> */}
      {/* <AltHero/> */}
      <div className=" flex flex-col my-10 gap-6 items-center flex-grow max-w-full w-full p-5">
        <FeatureCard
          direction="ltr"
          description="You are going to learn from a best teacher with good,environment, facilities, and quality"
          head="Learn from the best teachers"
          statone="Teachers"
          stattwo="Students"
          statthree="Courses"
          color="linear-gradient(135deg, rgba(255,6,206,1) 22%, rgba(162,53,113,1) 100%)"
          imgsrc="/learn_hero_bg.png"
        />
        <FeatureCard
          direction="rtl"
          head="Earn by your work"
          description="TalentSkool provides an environment to work with a people from different countries of the world."
          statone="Workers"
          stattwo="Freelancers"
          statthree="Recruiters"
          color="blue"
          imgsrc="/earn_hero_bg.png"
        />
        <FeatureCard
          color="black"
          direction="ltr"
          head="Network with top talent"
          description="You will encounter top talent whose voices are respected in the industry"
          statone="Voices"
          stattwo="Industry Leaders"
          statthree="Researchers"
          imgsrc="/network_hero.png"
        />
      </div>
      <CourseDemo courseCardData={courseCardData} />
      <TestimonialsSection testimonialData={testimonialData} />
      <FAQSection />
      <CTASection setDisplay={setCTAModalDisplay} />
      <Footer />
    </>
  );
}

export async function getStaticProps(ctx) {
  const courseCardData = [
    {
      date_of_release: "2023-09-01",
      category: "Computer Science",
      title: "Introduction to Artificial Intelligence",
      description:
        "Explore the fundamentals of Artificial Intelligence (AI), including machine learning, neural networks, and natural language processing. Learn how to apply AI techniques to real-world problems and build AI-powered applications.",
      instructor: "Dr. Sarah Johnson",
      job_title: "Senior AI Researcher",
      thumbnail_url: "/ai_course_banner.jpg",
    },
    {
      date_of_release: "2023-08-15",
      category: "Business",
      title: "Digital Marketing Strategies",
      description:
        "Master the art of digital marketing and discover strategies to reach and engage your target audience online. Learn about SEO, social media marketing, email campaigns, and data analytics to boost your business's online presence.",
      instructor: "John Smith",
      job_title: "Digital Marketing Consultant",
      thumbnail_url: "/suit_dude.png",
    },
    {
      date_of_release: "2023-09-30",
      category: "Health & Fitness",
      title: "Mindfulness Meditation",
      description:
        "Develop a mindfulness meditation practice to reduce stress, increase focus, and enhance overall well-being. Learn various meditation techniques, breathing exercises, and tips for integrating mindfulness into daily life.",
      instructor: "Dr. Emily Roberts",
      job_title: "Mental Health Counselor",
      thumbnail_url: "/meditation_course_banner.jpg",
    },
    {
      date_of_release: "2023-08-25",
      category: "Language Learning",
      title: "Spanish for Beginners",
      description:
        "Begin your journey to learn Spanish, one of the most widely spoken languages in the world. Acquire essential vocabulary, grammar, and conversational skills to confidently communicate in everyday situations.",
      instructor: "Maria Gonzalez",
      job_title: "Language Instructor",
      thumbnail_url: "/spanish_course_banner.jpg",
    },
  ];

  const testimonialData = [
    {
      id: 1,
      review:
        "The edtech platform helped me gain valuable skills that are directly applicable to my career. The instructors are knowledgeable and provide practical insights.",
      avatar: "/path/to/avatar3.jpg",
      name: "Sarah Johnson",
      job: "Marketing Manager",
    },
    {
      id: 2,
      review:
        "I love how user-friendly the edtech platform is. The interface is intuitive, and the content is well-organized, making it easy to find the courses I need.",
      avatar: "/path/to/avatar4.jpg",
      name: "Michael Brown",
      job: "Business Analyst",
    },
    {
      id: 3,
      review:
        "The edtech platform offers a vast library of courses to choose from. It's a one-stop solution for continuous learning and professional development.",
      avatar: "/path/to/avatar5.jpg",
      name: "Emily Rodriguez",
      job: "Data Scientist",
    },
    {
      id: 4,
      review:
        "I appreciate the flexibility of the edtech platform, allowing me to learn at my own pace. The interactive quizzes and assignments keep me engaged throughout the courses.",
      avatar: "/path/to/avatar6.jpg",
      name: "David Lee",
      job: "Web Developer",
    },
    {
      id: 5,
      review:
        "The edtech platform's community forums have been a valuable resource. I can connect with fellow learners, discuss topics, and seek help from instructors.",
      avatar: "/path/to/avatar7.jpg",
      name: "Ava Martinez",
      job: "Student",
    },
    {
      id: 5,
      review:
        "The edtech platform's community forums have been a valuable resource. I can connect with fellow learners, discuss topics, and seek help from instructors.",
      avatar: "/path/to/avatar7.jpg",
      name: "Ava Martinez",
      job: "Student",
    },
    // Add more testimonials data here
  ];

  return {
    props: {
      videoPath: "./mov_bbb.mp4",
      courseCardData,
      testimonialData,
    },
  };
}
