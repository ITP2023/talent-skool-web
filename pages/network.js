import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const PersonCard = ({ avatar, name, description }) => {

  return (
    <div className="flex flex-col bg-white p-8 space-y-8 shadow-neon rounded-xl">
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
        <button className="rounded-full border border-black w-8 h-8 text-center">
          <Image
            alt=""
            width={20} height={20}
            src="/chat.png"
            className="text-center mx-auto"
          />
        </button>
      </div>
    </div>
  );
}

const SearchBar = () => {

  return (
    <div className="mx-auto w-full text-center my-8">
      <input
        type="text"
        placeholder="Search"
        className="bg-white rounded-xl p-4 w-full mx-auto text-lg"
      />
    </div>
  )
}

const PeopleSection = () => {

  const peopleData = [
    {
      avatar: "/unsplash_X6Uj51n5CE8.png",
      name: "Arvind Joshi",
      description: "Lorem ipsum"
    }
  ];


  return (
    <section className="w-10/12 h-auto px-4 mx-auto mt-32">
      <p className="text-center mx-auto text-3xl text-white">Network with Like Minded People</p>
      <SearchBar />
      <div className="grid auto-cols-auto auto-rows-auto">
        {
          peopleData.map(({ avatar, name, description }, i) => (
            <PersonCard
              key={i}
              avatar={avatar}
              name={name}
              description={description}
            />
          ))
        }
      </div>
    </section>
  );

}

const NetworkPage = () => {

  return (
    <div className="absolute bg-black w-full h-full">
      <Head>
        <title>Network</title>
      </Head>
      <Navbar />
      <PeopleSection />
      <Footer />
    </div>
  );
}

export default NetworkPage;