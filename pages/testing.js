import { useState } from "react";
import Image from "next/image";

import NextIcon from "@/components/next_icon";
import PrevIcon from "@/components/prev_icon";

const TestimonialCard = ({ className, testimonial }) => {
  return (
    <div key={testimonial.id} className={className}>
      <div className="grow mb-8 max-w-screen text-gray-500 text-xl italic leading-relaxed dark:text-gray-400">
        <p className="my-4 px-4 w-screen md:w-full h-full">{testimonial.review}</p>
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

const TestimonialsSection = () => {
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
    // Add more testimonials data here
  ];

  const [tab, setTab] = useState(0);

  const handleNextTab = () => {
    console.log(tab);
    setTab((prev) => prev !== testimonialData.length - 1 ? prev + 1 : 0);
  };

  const handlePrevTab = () => {
    console.log(tab);
    setTab((prev) => prev !== 0 ? prev - 1 : testimonialData.length - 1);
  };

  return (
    <section className="h-full max-w-screen my-10 mx-auto">
      <div className="w-full md:w-2/3 md:mx-auto h-full">
        <span
          className="absolute p-4 shadow-lg z-10 text-center w-auto h-auto left-0 top-[13rem] rounded-full bg-gray-50"
          onClick={() => handlePrevTab()}
        >
          <PrevIcon width={15} height={15} />
        </span>
        <span
          className="absolute p-4 shadow-lg z-10 text-right w-auto h-auto right-0 top-[13rem] rounded-full bg-gray-50"
          onClick={() => handleNextTab()}
        >
          <NextIcon width={15} height={15} />
        </span>
        <div className="w-full overflow-x-hidden">
          <div
            className={`flex flex-row items-center transition-transform duration-300`}
            style={{
              transform: `translateX(-${tab * 100}vw)`,
              width: `${Math.ceil(testimonialData.length) * 100}vw`
            }}
          >
            {testimonialData.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                id={i}
                className="h-full w-screen md:justify-evenly md:mr-[30em] border flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800 dark:border-gray-700 p-6 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
