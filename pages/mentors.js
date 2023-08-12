import Head from "next/head";
// import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const People = () =>{

    return(
        <div className="w-full h-full">

        </div>
    )
}


const MentorsPage = () => {
    return (
        <div className="absolute bg-black w-full h-full">
          <Head>
            <title>Mentor</title>
          </Head>
          <Navbar />
          <People />
          <Footer />
        </div>
      );
}

export default MentorsPage;