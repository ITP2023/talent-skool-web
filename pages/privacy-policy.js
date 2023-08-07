import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const PolicySection = () => {
  const ques = [
    {
      id: 1,
      heading: "1. Information We Collect",
      sub: [
        {
          id: 1,
          subhead: "1.1. Personal Information:",
          message:
            "When you sign up for Talent Skool, we may collect certain personal information, including but not limited to your name, email address, phone number, and any other information you provide voluntarily.",
        },
        {
          id: 2,
          subhead: "1.2. User Content:",
          message:
            "Our Services allow you to upload, share, and showcase your talents, which may include audio, video, images, text, and other content. We collect and store your User Content for the purpose of providing the Services to you.",
        },
        {
          id: 3,
          subhead: "1.3. Usage Data:",
          message:
            "We automatically collect information about how you interact with our Services. This includes information about your device, IP address, browser type, operating system, and other technical data. We may also collect data on the features you use, the pages you visit, and your usage patterns within the app.",
        },
        {
          id: 4,
          subhead: "1.4. Cookies and Similar Technologies:",
          message:
            "We use cookies and similar tracking technologies to improve your experience on our app and website. Cookies are small data files that are placed on your device to recognize your browser and capture certain information. You can manage your cookie preferences through your browser settings.",
        },
        // Add more sub-items as needed
      ],
    },
    {
      id: 2,
      heading: "2. How We Use Your Information",
      sub: [
        {
          id: 1,
          subhead: "2.1. Provide and Improve Services:",
          message:
            "We use your information to provide and personalize our Services to enhance your experience. This includes processing your talent submissions, showcasing your talents, and providing relevant recommendations.",
        },
        {
          id: 2,
          subhead: "2.2. Communication:",
          message:
            "We may use your contact information to communicate with you about updates, news, and changes to our Services. We may also send you promotional materials or offers if you have provided consent.",
        },
        {
          id: 3,
          subhead: "2.3. Analytics:",
          message:
            "We use Usage Data and other analytics tools to analyze user behavior, app performance, and identify areas for improvement.",
        },
        {
          id: 4,
          subhead: "2.4. Legal Purposes:",
          message:
            "We may use your information as required or permitted by law, or when necessary to protect our rights, privacy, safety, or property.",
        },
        // Add more sub-items as needed
      ],
    },
    {
      id: 3,
      heading: "3. Sharing of Information",
      sub: [
        {
          id: 1,
          subhead: "3.1. With Other Users:",
          message:
            "Your User Content will be shared with other users of the app in accordance with your privacy settings.",
        },
        {
          id: 2,
          subhead: "3.2. Third-Party Service Providers:",
          message:
            "We may share your information with third-party service providers who help us operate, analyze, and improve our Services.",
        },
        {
          id: 3,
          subhead: "3.3. Legal Compliance:",
          message:
            "We may share your information when required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.",
        },
        // Add more sub-items as needed
      ],
    },
    {
      id: 4,
      heading: "4. Data Security",
      message:
        "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please understand that no data transmission over the internet or electronic storage method is 100% secure.",
    },
    {
      id: 5,
      heading: "5. Your Choices",
      message:
        "You have the right to access, correct, and delete your personal information. You can manage your account settings within the app or contact us for assistance. You may also unsubscribe from marketing communications at any time.",
    },
    {
      id: 6,
      heading: "6. Children's Privacy",
      message:
        "Our Services are not intended for children under the age of [insert minimum age in your jurisdiction]. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal information to us, please contact us immediately.",
    },
    {
      id: 7,
      heading: "7. Data Security",
      message:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the 'effective date' at the top will indicate when the updates take effect.",
    },
    {
      id: 7,
      heading: "8. Contact Us",
      message:
        "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at talentskool@gmail.com .",
    },
    // Add more question-answer pairs as needed
  ];

  return (
    <section className="mt-24 flex flex-col mx-auto my-14 p-4 w-[80%] gap-10">
      <h2 className="font-bold text-4xl py-4">Privacy Policy</h2>
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
          <h3 className="font-bold text-3xl py-4">{que.heading}</h3>
          {que.sub &&
            que.sub.length > 0 &&
            que.sub.map((subs) => (
              <div className="ml-2" key={subs.id}>
                <h4 className="font-bold text-2xl py-2">{subs.subhead}</h4>
                <p className="text-md p-2">{subs.message}</p>
              </div>
            ))}
          {que.message && <p className="text-md p-2">{que.message}</p>}
        </div>
      ))}
      <p className="text-md p-2">
        By using Talent Skool, you acknowledge that you have read and understood
        this Privacy Policy and consent to the collection and use of your
        information as described herein.
      </p>
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
      <Navbar fixed={true} />
      <PolicySection />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
