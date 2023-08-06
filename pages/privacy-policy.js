import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const PolicySection = () => {
  const ques = [
    {
      id: 1,
      question: "What information do we collect?",
      ans: "Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.",
    },
    {
      id: 2,
      question: "What do we use your information for?",
      ans: "Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.",
    },
    {
      id: 3,
      question: "How do we protect your information?",
      ans: "Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.",
    },
    {
      id: 4,
      question: "Do we use cookies?",
      ans: "Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.",
    },
    {
      id: 3,
      question: "How we provide security to your account?",
      ans: "Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.Lorem ipsum, in graphical and textual context,refers  iller text that    placed in a document,simply dummy text of the priniting typeseeting.",
    },
    // Add more question-answer pairs as needed
  ];

  return (
    <section className="flex flex-col mx-auto my-14 p-4 w-[80%] gap-10">
      <div>
        <p className="text-md p-2">
          At Talent Skool , we are committed to protecting your privacy and
          safeguarding your personal information. This Privacy Policy outlines
          how we collect, use, disclose, and protect your information when you
          use our mobile application and website services. By using Talent
          Skool, you consent to the practices described in this policy.
        </p>
      </div>
      {ques.map((que) => (
        <div key={que.id}>
          <h3 className="font-bold text-2xl py-4">{que.question}</h3>
          <p className="text-md p-2">{que.ans}</p>
        </div>
      ))}
      {/* <div>
        <h3 className="font-bold text-2xl py-4">
          What information do we collect?
        </h3>
        <p className="text-md p-2">
          Lorem ipsum, in graphical and textual context,refers iller text that
          placed in a document,simply dummy text of the priniting
          typeseeting.Lorem ipsum, in graphical and textual context,refers iller
          text that placed in a document,simply dummy text of the priniting
          typeseeting.Lorem ipsum, in graphical and textual context,refers iller
          text that placed in a document,simply dummy text of the priniting
          typeseeting.Lorem ipsum, in graphical and textual context,refers iller
          text that placed in a document,simply dummy text of the priniting
          typeseeting.
        </p>
      </div> */}
    </section>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | TalentSkool</title>
      </Head>
      <Navbar fixed={false} />
      <PolicySection />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
