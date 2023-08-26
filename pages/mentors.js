import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SearchBar from "@/components/searchbar";
import BackStyle from "@/components/about/back_style";
import Arrow from "@/components/about/arrow";
import Path from "@/components/about/path";

const Hero = () => {
  return (
    <div className="relative bg-white w-full h-[300px] sm:h-[600px] md:h-[925px] overflow-hidden text-left text-26xl text-skyblue font-sans">
      <div className="flex justify-end w-[1443px] h-[1174px] absolute right-0 md:flex hidden">
        <BackStyle />
      </div>
      <div>
        <div className="w-full absolute">
          <Image width={1700} height={1100} src="/aboutFrame.png" alt="" />
        </div>

        <div className="left-10 w-[270px] sm:left-16 sm:w-1/2 md:top-[100px] absolute flex flex-col items-center justify-center h-full md:w-full  text-darkslategray font-sans">
          <b className=" mx-auto w-200px md:leading-[87px] inline-block md:w-[1020px] md:h-[273px] text-center text-[20px] sm:text-[30px] md:top-0 md:top-0 md:text-[70px]">
            Learn and grow with help from world-class mentors
          </b>
          <p className="mx-auto w-[250px] md:w-[1020px] md:h-[273px] text-center md:mt-[-60px]">
            Book and meet over 100+ mentors for 1:1 mentorship in our global
            community
          </p>
        </div>
      </div>
    </div>
  );
};

const Structure = () => {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex items-center justify-center">
        <p className="text-slate-500">Features</p>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-[50px]">How it works</h1>
      </div>
      <div className="flex flex-col md:flex-row md:gap-0 gap-5">
        <div className="mx-auto flex flex-col w-200px md:w-[160px] items-center justify-around gap-5 rounded-md p-4 border-2 border-slate-500 md:gap-0 md:p-0 md:rounded-none md:border-white md:border-0">
          <div className="w-[79px] h-[79px] bg-slate-200 rounded-full"></div>
          <p>1. Find a Mentor</p>
          <h3 className="text-center">
            Create an account, sign up to be a mentor or mentee
          </h3>
          <div className="w-[37px] h-[13px] hidden md:flex">
            <Arrow />
          </div>
        </div>
        <div className="mt-10 hidden md:flex">
          <Path />
        </div>
        <div className="mx-auto flex flex-col w-[250px] md:w-[175px] items-center justify-around gap-5 rounded-md p-4 border-2 border-slate-500 md:gap-0 md:p-0 md:rounded-none md:border-white md:border-0">
          <div className="w-[79px] h-[79px] bg-slate-200 rounded-full"></div>
          <p>2. Sign Up</p>
          <h3 className="text-center">Once you've found the right matches,</h3>
          <div className="w-[37px] h-[13px] hidden md:flex">
            <Arrow />
          </div>
        </div>
        <div className="mt-10 hidden md:flex">
          <Path />
        </div>
        <div className="mx-auto flex flex-col w-[250px] md:w-[175px] items-center justify-around gap-5 rounded-md p-4 border-2 border-slate-500 md:gap-0 md:p-0 md:rounded-none md:border-white md:border-0">
          <div className="w-[79px] h-[79px] bg-slate-200 rounded-full"></div>
          <p>3. Send Mentor Request</p>
          <h3 className="text-center">
            Lorem Ipsum is simply dummy simple text
          </h3>
          <div className="w-[37px] h-[13px] hidden md:flex">
            <Arrow />
          </div>
        </div>
        <div className="mt-10 hidden md:flex">
          <Path />
        </div>
        <div className="mx-auto flex flex-col w-[250px] md:w-[175px] items-center justify-around gap-5 rounded-md p-4 border-2 border-slate-500 md:gap-0 md:p-0 md:rounded-none md:border-white md:border-0">
          <div className="w-[79px] h-[79px] bg-slate-200 rounded-full"></div>
          <p>4. Connect</p>
          <h3 className="text-center">
            Lorem Ipsum is simply dummy simple text
          </h3>
          <div className="w-[37px] h-[13px] hidden md:flex">
            <Arrow />
          </div>
        </div>
        <div className="mt-10 hidden md:flex">
          <Path />
        </div>
        <div className="mx-auto flex flex-col w-[250px] md:w-[175px] items-center justify-around gap-5 rounded-md p-4 border-2 border-slate-500 md:gap-0 md:p-0 md:rounded-none md:border-white md:border-0">
          <div className="w-[79px] h-[79px] bg-slate-200 rounded-full"></div>
          <p>5. Schedule Meeting</p>
          <h3 className="text-center">
            Earn Teetors Points engaging with others
          </h3>
          <div className="w-[37px] h-[13px] hidden md:flex">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

const OneMentor = () => {
  return (
    <div className="flex p-4 mt-16 md:p-16 items-center justify-around flex-col md:flex-row">
      <div className="flex md:hidden">
        <p className="text-slate-500">ABOUT US</p>
      </div>
      <div className="w-full md:w-1/2 px-10">
        <Image width={500} height={500} src="/mentor_1.png" alt="" />
      </div>
      <div className="items-center w-full md:w-1/2 flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-5">
          <div className="hidden md:flex">
            <p className="text-slate-500">ABOUT US</p>
          </div>
          <h2 className="font-sans text-[25px] md:text-[50px]">
            Book 1:1 Sessions
          </h2>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-5">
          <h3 className="font-sans">Creative & Proffesional Digital Mentors</h3>
          <p className="text-slate-500">
            Schedule a session instantly with a mentor and work with them
            directly on Teetors - Whether it's for one-off tatical adviceor
            multiple sessioins towards a long-term goal.
          </p>
          <p className="text-slate-500">
            Schedule a session instantly with a mentor and work with them
            directly on Teetors - Whether it's for one-off tatical adviceor
            multiple sessioins towards a long-term goal.
          </p>
        </div>
        <div>
          <button className="bg-primary p-5 rounded-md text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-110 duration-300">
            EXPLORE MENTORS
          </button>
        </div>
      </div>
    </div>
  );
};

const BitMap = () => {
  return (
    <div className="mt-16 flex flex-col w-full h-[450px] md:h-[900px]">
      <div className="flex flex-col items-center">
        <p className="text-slate-500">GET STARTED</p>
        <h2 className="font-sans text-[25px] md:text-[50px] w-3/4 text-center">
          Expand your skillset, gain insights, and get support from mentors at
          no cost
        </h2>
      </div>
      <div className="relative w-full">
        <Image
          className="absolute"
          width={1500}
          height={500}
          src="/bitmap.png"
          alt=""
        />
        <div className="flex items-center justify-center">
          <Image
            className="absolute top-[250px]"
            width={300}
            height={300}
            src="/mentors.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const MentorCard = ({ name, description, avatar }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white p-8 space-y-8 shadow-neon rounded-xl">
      <div className="mx-auto text-center">
        <Image
          alt="mentor"
          width={100}
          height={100}
          src={avatar}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-center text-lg font-bold f">{name}</p>
        <p>{description}</p>
      </div>
      <div className="mx-auto w-full">
        <button className="text-lg text-white bg-primary w-full rounded-lg shadow-xl py-1">
          Contact
        </button>
      </div>
    </div>
  );
};

const MentorsSection = () => {
  const mentorsData = [
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "Arvind Joshi",
      description: "Lorem ipsum",
    },
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "Alexandra Smith",
      description:
        "Passionate about mathematics and eager to help students excel in algebra, calculus, and geometry.",
    },
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "John Davis",
      description:
        "Experienced computer science professional ready to guide students in programming, data structures, and algorithms.",
    },
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "Emily Johnson",
      description:
        "Language enthusiast excited to teach English grammar, literature, and effective communication skills.",
    },
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "Michael Lee",
      description:
        "Biology expert with a deep understanding of genetics, evolution, and ecology, here to support students' scientific curiosity.",
    },
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "Sophia Martinez",
      description:
        "History aficionado ready to explore the past with students, focusing on world history, cultures, and civilizations.",
    },
  ];

  return (
    <section className="bg-black w-10/12 h-auto p-8 mx-auto my-32 rounded-md">
      <p className="text-center mx-auto text-3xl text-white">
        Find the best mentors of their craft
      </p>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {mentorsData.map(({ avatar, name, description }, i) => (
          <MentorCard
            key={i}
            name={name}
            description={description}
            avatar={avatar}
          />
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <div className="relative flex h-[280px] md:h-[500px]">
      <div className="absolute md:left-20">
        <Image width={1500} height={500} src="/dotmap.png" alt="" />
      </div>
      <div className="absolute flex flex-col items-center justify-center top-[-50px] md:top-20 md:left-60 gap-8 p-8">
        <h2 className="font-sans text-[25px] md:text-[50px] text-center">
          Your next chapter, made possible with mentorship.
        </h2>
        <p className="text-slate-500">
          Explore 4000+ mentors from 60+ countries, to help you to achieve and
          overcoe any challenges you fae.
        </p>
        <button className="bg-primary p-2 rounded-md text-white focus-visible:outline hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-110 duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
const MentorsPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Head>
        <title>Mentors | TalentSkool</title>
      </Head>
      <Navbar />
      <Hero />
      <Structure />
      <OneMentor />
      <BitMap />
      <MentorsSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default MentorsPage;
