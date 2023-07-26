import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Footer from "../components/footer";


const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
          <div className="flex flex-row w-full space-x-4 justify-between">
            <div className="flex flex-row space-x-4">
              <div className="rounded-full w-10 h-10 bg-indigo-500 text-center">
                      <p className="text-center m-auto text-white text-2xl">{idx + 1}</p>
              </div>
              <h4 className="pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                  {faqsList.q}
              </h4>
            </div>
                <div className="cursor-pointer">
                  {
                      state ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                      ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                      )
                  }
                </div>
          </div>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
              <div className="flex flex-row justify-center space-x-4 ml-16">
                <div className="w-1 bg-indigo-500">{' '}</div>
               
                    <p className="text-gray-500 w-full">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQSection =  () => {

    const faqsList = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-4xl text-gray-800 font-bold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
            <p className="mx-auto text-center mt-6">Still have a question? <Link href="/contact" className="underline decoration-indigo-500 underline-offset-4">Contact Us</Link></p>
        </section>
    )
}

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
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Here&apos;s what they say about us...</p>
      </div> 
      <div className="grid gap-4 mb-8 lg:mb-12 lg:grid-cols-2">
        {
          testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="flex flex-col justify-center items-center text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-lg text-gray-500 dark:text-gray-400">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3> */}
                  <p className="my-4">{testimonial.review}</p>
              </blockquote>
              <div className="flex justify-center items-center space-x-3">
                  <Image width={50} height={50} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{testimonial.name}</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.job}</div>
                  </div>
              </div>    
          </div>
          ))
        }
      </div>
    </div>
</section>
  );
}
const HeroSection = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });




  const [ backdrop, setBackdrop ] = useState(false);
  return (
    <div className="bg-white h-screen">
    <header className="absolute inset-x-0 top-0 z-50 h-screen">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex lg:flex-1">
              <h2 className="text-blue-700 text-4xl font-extrabold">Talent</h2>
              <h2 className="text-4xl font-extrabold">Skool</h2>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4 hover:decoration-indigo-500">About Us</Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4 hover:decoration-indigo-500">Teacher</Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4 hover:decoration-indigo-500">Network</Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4 hover:decoration-indigo-500">Courses</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
          <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</Link>
          <Link href="/signup" className="text-black border-solid border-2 border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm"><p className="text-black">Sign Up</p></Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        { backdrop ? <div className="fixed inset-0 z-50"></div> : ' '}
        <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${backdrop ? "hidden": ""}`}>
          <div className="flex items-center justify-between">
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span onClick={() => setBackdrop(true)} className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</Link>
              </div>
              <div className="py-6">
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
      
              
              <h1 ref={ref} className={`text-indigo-600 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${inView ? "animate-fade-in": 'opacity-0'}`}>Learn.</h1>
              
              <h1 className={`text-indigo-600 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${inView ? "animate-fade-in": "opacity-0"}`}>Earn.</h1>
              <p className={`max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${inView ? "animate-fade-in" : "opacity-0"}`}>
                <span className="text-indigo-600">Net</span>work.
              </p>
            <br/>
            {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Stripe to simplify their payment stack.</p> */}
            <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 bg-black">
              <div className="w-10">
                <Image alt="play_icon" className="h-full w-full" width={90} height={90}  src="google-play-store-svgrepo-com.svg" />
              </div>
              <div className="">
                <div className="text-sm font-extrabold text-white">Download on the</div>
                <div className="text-2xl text-white">Google Play</div>
              </div>
            </button>
        </div>
        <div className="lg:col-span-5 lg:flex">
            <Image ref={ref} width={400} height={100} src="/hero.png" alt="mockup" className={inView ? "animate-fade-in-right" : "opacity-0"} />
        </div>                
    </div>
</div>
  </div>
  );
}

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
const FeatureCard = ({ direction, head, description, statone, stattwo, statthree, color, imgsrc }) => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });


  if (direction === "ltr") {
  
    return (
      <div style={{
        background: color
      }} className="flex items-center justify-center h-full w-3/4 rounded-2xl py-4">
  
  
      <div ref={ref} className={`w-500 h-500 bg-transperant flex-shrink-0 p-4 ${inView ? "animate-fade-in" :"opacity-0"}`}>
        {/* Image here */}
        <Image width={200} height={200} src={imgsrc} alt="Hero Image" className="w-full h-full object-cover" />
      </div>
      <div ref={ref} className={`ml-6 flex flex-col ${inView ? "animate-fade-in-right" : "opacity-0"}`}>
        <p className="text-3xl font-bold mb-2 text-white">{head}</p>
        <p className="text-white">{description}</p>
        <div className="mt-4">
          <button className={`${color === "black" ? "bg-white" : "bg-black"} ${color === "black" ? "text-black": "text-white"} px-4 py-2 mx-2`}>Learn with us</button>
          <button className={`${color === "black" ? "bg-white" : "bg-black"} ${color === "black" ? "text-black": "text-white"} px-4 py-2 mx-2`}>Explore us</button>
        </div>
        <div className="mt-4 flex">
          <div className="p-2 mr-2">
            <p className="text-2xl font-bold text-orange-500">20+</p>
            <p className="text-white">{statone}</p>
          </div>
          <div className="p-2 mr-2">
            <p className="text-2xl font-bold text-orange-500">20K</p>
            <p className="text-white">{stattwo}</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold text-orange-500">30</p>
            <p className="text-white">{statthree}</p>
          </div>
        </div>
      </div>
    </div>
  
    );
  }
  else {
    return (
      <div style={{
        background: color
      }} className="flex items-center justify-center h-full w-3/4 rounded-2xl py-4">
  
  
      <div ref={ref} className={`ml-6 flex flex-col ${inView ? "animate-fade-in" : "opacity-0"}`}>
        <p className="text-3xl font-bold mb-2 text-white">{head}</p>
        <p className="text-white">{description}</p>
        <div className="mt-4">
          <button className={`${color === "black" ? "bg-white" : "bg-black"} ${color === "black" ? "text-black": "text-white"} px-4 py-2 mx-2`}>Learn with us</button>
          <button className={`${color === "black" ? "bg-white" : "bg-black"} ${color === "black" ? "text-black": "text-white"} px-4 py-2 mx-2`}>Explore us</button>
        </div>
        <div className="mt-4 flex">
          <div className="p-2 mr-2">
            <p className="text-2xl font-bold text-orange-500">20+</p>
            <p className="text-white">{statone}</p>
          </div>
          <div className="p-2 mr-2">
            <p className="text-2xl font-bold text-orange-500">20K</p>
            <p className="text-white">{stattwo}</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold text-orange-500">30</p>
            <p className="text-white">{statthree}</p>
          </div>
        </div>
      </div>
      <div className={`w-500 h-500 bg-transperant flex-shrink-0 p-4 ${inView ? "animate-fade-in-right" :"opacity-0"}`}>
        {/* Image here */}
        <Image ref={ref} width={200} height={200} src={imgsrc} alt="Hero Image" className="w-full h-full object-cover" />
      </div>
    </div>
  
    );
  }
}




const CourseCard = () => {
  return (
    <div className="max-w-md mx-auto p-4 my-4">
      {/* Image */}
      <div className="mb-2">
        <Image width={300} height={170} src="/suit_dude.png" alt="Image" className="w-full h-70 rounded-xl" />
      </div>

      {/* Date and Marketing */}
      <div className="flex items-center mb-2 w-full justify-start gap-4 my-4">
        <div className="mr-2">Mar 20, 2023</div>
        <div className="bg-gray-100 px-4 py-1 rounded-2xl hover:cursor-pointer hover:bg-gray-300">Marketing</div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">Your Heading</h1>

      {/* Random text paragraph */}
      <p className="text-left mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
        lorem sit amet bibendum pulvinar.
      </p>

      {/* Author */}
      <div className="flex items-center mt-6">
        <div className="w-12 h-12 rounded-full bg-gray-400 mr-2"></div>
        <div>
          <div className="font-semibold">John Doe</div>
          <div className="text-gray-600">Web Designer</div>
        </div>
      </div>
    </div>
  );
}

const CourseDemo = ({ videoPath }) => {
  return (
    <section className="mx-auto p-6 max-w-screen">
      <p className="text-3xl font-bold ml-6 p-4">Here&apos;s a glimpse</p>
      <div className="w-full">
        <div className="w-full">
          <video 
            poster="/course_thumbnail.png" 
            controls 
            width={1000} height={700} disablePictureInPicture
            className="w-3/4 mx-auto rounded-xl"
          >
            <source src={videoPath} type="video/mp4" />
          </video>
        </div>
        <div className="w-full px-2 py-4 mx-auto grid grid-cols-3 grid-rows-2 gap-2">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </div>
    </section>
  );

}



/**
 * 
 * @param {{ videoPath: string }} param0 
 * @returns 
 */
export default function Home({ videoPath }) {
  return (
    <>
      <Head>
        <title>Welcome to TalentSkool</title>
      </Head>
      <HeroSection/>
      <div className="flex flex-col gap-4 items-center flex-grow max-w-screen">
        <FeatureCard 
          direction="ltr"
          description="You are going to learn from a best teacher with 
          good,environment, facilities, and quality"
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
      <CourseDemo videoPath={videoPath} />
      <TestimonialsSection/>
      <FAQSection/>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      videoPath: "./mov_bbb.mp4"
    }
  }
}