import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CancelIcon from "@/components/cancel_icon";
import EmailIcon from "@/components/email_icon";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseMod";

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
          <span className="inline-block text-white text-center px-2 py-1 font-semibold rounded-full w-[2.5em] h-[2.5em] bg-indigo-500">
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
          <div className="w-1 bg-indigo-500"> </div>

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
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl text-gray-800 font-bold">
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
          className="underline decoration-indigo-500 underline-offset-4"
        >
          Contact Us
        </Link>
      </p>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonialsData = [
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
    // Add more testimonials data here
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen text-center lg:py-16 lg:px-6 w-[80%]">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Here&apos;s what they say about us...
          </p>
        </div>
        <div className="grid gap-4 mb-8 lg:mb-12 lg:grid-cols-2">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-center items-center text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700 p-6 rounded-xl"
            >
              <div className="mx-auto mb-8 max-w-lg text-gray-500 text-xl italic leading-relaxed dark:text-gray-400">
                <p className="my-4">{testimonial.review}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroBanner = () => {
  const [heroRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [heroImageRef, heroImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-white h-screen max-w-screen w-screen">
      <div className="isolate md:flex md:flex-row justify-evenly mx-auto py-10 px-4 text-[5em] mt-16">
        {/* Gradient BG */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        {/* End of Gradient BG */}
        <div className="place-self-center md:flex md:flex-col">
          <h1
            ref={heroRef}
            className={`text-indigo-600 max-w-2xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            ENHANCE &
          </h1>

          <h1
            ref={heroRef}
            className={`text-indigo-600 max-w-2xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            SHOWCASE
          </h1>
          <p
            ref={heroRef}
            className={`max-w-2xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            your <span className="text-indigo-600">TALENT</span> to the world.
          </p>
          <div className="mt-16">
            <a
              href="http://play.google.com/store/apps/details?id=com.google.android.apps.maps"
              rel="noopener noreferrer"
              target="_blank"
              className="px-3 w-fit py-1.5 flex gap-2 items-center rounded-xl outline outline-2 bg-black mx-auto md:mx-none"
            >
              <div className="w-14">
                <Image
                  alt="play_icon"
                  className="h-full w-full"
                  width={90}
                  height={90}
                  src="google-play-store-svgrepo-com.svg"
                />
              </div>
              <div className="w-full">
                <div className="text-sm font-extrabold text-white">
                  Download on the
                </div>
                <div className="text-2xl text-white">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <div className="ml-32 md:block hidden">
          <Image
            ref={heroImageRef}
            width={400}
            height={100}
            src="/hero.png"
            alt="mockup"
            className={
              heroImageInView
                ? "animate-fade-in-right rounded-t-full"
                : "opacity-0"
            }
          />
        </div>
      </div>
    </div>
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
        className={`ml-6 flex flex-col ${
          inView ? "animate-fade-in-right" : "opacity-0"
        }`}
      >
        <p className="text-3xl font-bold mb-2 text-white text-center md:text-left">
          {head}
        </p>
        <p className="text-white text-center md:text-left my-2 md:my-auto px-2">
          {description}
        </p>
        <div className="mt-4 flex flex-row justify-evenly md:justify-start">
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
        <div className="mt-4 flex flex-row justify-evenly md:justify-start">
          <div className="p-2 mr-2">
            <p className="text-2xl text-center font-bold text-orange-500">
              20+
            </p>
            <p className="text-white whitespace-wrap">{statone}</p>
          </div>
          <div className="p-2 mr-2">
            <p className="text-2xl text-center font-bold text-orange-500">
              20K
            </p>
            <p className="text-white whitespace-wrap">{stattwo}</p>
          </div>
          <div className="p-2">
            <p className="text-2xl text-center font-bold text-orange-500">30</p>
            <p className="text-white whitespace-wrap">{statthree}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @param {CourseCardData} param0
 * @returns
 */
const CourseCard = ({
  date_of_release,
  category,
  title,
  description,
  instructor,
  job_title,
  thumbnail_url,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 my-4">
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
      <p className="text-left mb-2">{description}</p>

      {/* Author */}
      <div className="flex items-center mt-6">
        <div className="w-12 h-12 rounded-full bg-gray-400 mr-2"></div>
        <div>
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
  return (
    <section className="mx-auto p-6 max-w-screen">
      <p className="text-3xl font-bold ml-6 p-4 my-8">Here&apos;s a glimpse</p>
      <div className="w-full">
        <div className="w-full">
          <video
            poster="/course_thumbnail.png"
            controls
            width={1000}
            height={700}
            disablePictureInPicture
            className="w-full md:w-3/4 mx-auto rounded-xl"
          >
            <source src={videoPath} type="video/mp4" />
          </video>
        </div>
        <div className="w-full flex flex-col px-2 py-4 mx-auto lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-2">
          {courseCardData.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
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

  const sendCustomerDetails = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, countryCode } = customerData;
    console.log(err);
    console.log(customerData);
    if (!name) {
      console.log(name);
      setErr("Please enter your name");
      return;
    }
    if (!email) {
      setErr("Please enter your email");
      return;
    }

    if (!phoneNumber) {
      setErr("Please enter your Phone Number");
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

  return display ? (
    <div className="fixed inset-0 z-20 overflow-hidden">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40 z-10"
        onClick={() => setDisplay(false)}
      ></div>
      <div className="flex z-30 items-center min-h-screen px-4 py-8">
        <div
          className={`${
            success ? "" : "hidden"
          } relative z-2 w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg`}
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
          } relative z-40 w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg`}
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
            <h4 className="text-xl font-medium text-gray-800">
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
                      className="text-sm bg-white outline-none rounded-lg h-full"
                    >
                      <option value="+1">US +1</option>
                      <option value="+44">UK +44</option>
                      <option value="+91">India +91</option>
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
                    placeholder="9999988888"
                    required
                    className="text-gray-500 w-full pl-[6.5rem] pr-3 py-2 rounded-lg border outline-none focus:border-indigo-600 shadow-sm"
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
                    className="peer w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg invalid:border-red-500"
                  />
                  <p className="invisible text-red-500 peer-invalid:visible">
                    Please enter a valid email
                  </p>
                </label>
              </div>
              <button
                type="submit"
                className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
              >
                Notify Me
              </button>
            </form>
            <div
              className={`${
                err !== "" ? "" : "hidden"
              } text-center px-2 py-2 text-red-300 mx-auto`}
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
    <section className="w-screen h-auto mt-10">
      <div className="w-11/12 py-8 px-4 rounded-lg bg-black mx-auto flex flex-col">
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
 * @param {{ videoPath: string, courseCardData: CourseCardData[] }} param0
 * @returns
 */
export default function Home({ videoPath, courseCardData }) {
  const [ctaModalShown, setCTAModalDisplay] = useState(true);

  return (
    <>
      <Head>
        <title>Welcome to TalentSkool</title>
      </Head>
      {/* <div className="w-screen h-full fixed z-50 inset-0 bg-black opacity-40" /> */}
      <CTAModal display={ctaModalShown} setDisplay={setCTAModalDisplay} />
      <Navbar fixed />
      {/* <HeroSection /> */}
      <HeroBanner />
      <div className="flex flex-col my-10 gap-6 items-center flex-grow max-w-screen w-full p-5">
        <FeatureCard
          direction="ltr"
          description="You are going to learn from a best teacher with good,environment, facilities, and quality"
          head="Learn from the best teachers"
          statone="Teachers"
          stattwo="Students"
          statthree="Courses"
          color="linear-gradient(135deg, rgba(255,6,206,1) 22%, rgba(162,53,113,1) 100%)"
          imgsrc="/learn_hero.png"
        />
        <FeatureCard
          direction="rtl"
          head="Earn by your work"
          description="TalentSkool provides an environment to work with a people from different countries of the world."
          statone="Workers"
          stattwo="Freelancers"
          statthree="Recruiters"
          color="blue"
          imgsrc="/earn_hero.png"
        />
        <FeatureCard
          color="black"
          direction="ltr"
          head="Network with top talent"
          description="You will encounter top talent whose voices are respoected in the industry"
          statone="Voices"
          stattwo="Industry Leaders"
          statthree="Researchers"
          imgsrc="/network_hero.png"
        />
      </div>
      <CourseDemo courseCardData={courseCardData} videoPath={videoPath} />
      <TestimonialsSection />
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
      thumbnail_url: "/suit_dude.png",
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
      thumbnail_url: "/suit_dude.png",
    },
    {
      date_of_release: "2023-08-25",
      category: "Language Learning",
      title: "Spanish for Beginners",
      description:
        "Begin your journey to learn Spanish, one of the most widely spoken languages in the world. Acquire essential vocabulary, grammar, and conversational skills to confidently communicate in everyday situations.",
      instructor: "Maria Gonzalez",
      job_title: "Language Instructor",
      thumbnail_url: "/suit_dude.png",
    },
  ];

  return {
    props: {
      videoPath: "./mov_bbb.mp4",
      courseCardData,
    },
  };
}
