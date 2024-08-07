import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SearchBar from "@/components/searchbar";

const PersonCard = ({ avatar, name, description }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white p-8 space-y-8 shadow-neon rounded-xl">
      <div className="mx-auto text-center">
        <Image
          alt=""
          width={100}
          height={100}
          src={avatar}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-center mx-auto text-lg font-bold">{name}</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-row items-center gap-2 w-full">
        <button className="text-lg text-white bg-primary w-10/12 rounded-lg shadow-xl py-1">
          Connect
        </button>
        <button className="rounded-full shadow-lg w-8 h-8 text-center">
          <Image
            alt=""
            width={20}
            height={20}
            src="/chat.png"
            className="text-center mx-auto"
          />
        </button>
      </div>
    </div>
  );
};

const PeopleSection = () => {
  const peopleData = [
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
    <section className="bg-black w-10/12 h-auto px-4 mx-auto my-32">
      <p className="text-center mx-auto text-3xl text-white">
        Network with Like Minded People
      </p>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 h-auto gap-4 w-full auto-rows-auto">
        {peopleData.map(({ avatar, name, description }, i) => (
          <PersonCard
            key={i}
            avatar={avatar}
            name={name}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

const NetworkPage = () => {
  return (
    <div className="bg-black w-full h-full">
      <Head>
        <title>Network</title>
      </Head>
      <Navbar />
      <PeopleSection />
      <Footer />
    </div>
  );
};

export default NetworkPage;
