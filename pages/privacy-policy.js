import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const PolicySection = () => {

  return (
    <section className="mx-auto my-14 p-4 w-[80%]">
      <div>
        <h3 className="font-bold text-2xl py-4">What information do we collect?</h3>
        <p className="text-md p-2">Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.</p>
      </div>
    </section>
  );
}

const PrivacyPolicyPage = () => {

  return (
    <>
      <Head>
        <title>Privacy Policy | TalentSkool</title>
      </Head>
      <Navbar fixed={false} />
      <PolicySection/>
      <Footer/>
    </>

  );
}

export default PrivacyPolicyPage;