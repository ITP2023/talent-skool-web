import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseMod";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "support@talentskool.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91 (800) 999 9888",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Bengaluru, Karnataka",
    },
  ];
  
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submissionDisplay, setSubmissionDisplay] = useState("");
  function validateName(name){
    const nameRegex = /^[A-Za-z\s]{4,}$/;
    return nameRegex.test(name);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    if (!validateName(name)) {
      setErr("Name should contins only Alphabets.");
      return;
    } else {
      setErr(""); // Clear the error message if the input is valid
    }
    setSubmissionDisplay(
      "Message sent successfully. Send another message if needed."
    );
    try {
      // Add a new document with the form data to a "submissions" collection
      await addDoc(collection(db, "/contact-form-submissions"), {
        name,
        email,
        company,
        message,
      });
      console.log("Submission complete");

      // Email sending code goes here (if needed)

      // Reset the form
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-14 my-28 ">
      <div className="max-w-screen-xl mx-auto px-4 text-slate-50 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-around lg:flex lg:max-w-[80%] p-8 rounded-lg bg-black shadow-neon">
          <div className="flex flex-col items-center justify-center max-w-lg space-y-3 gap-4">
            <p className="text-slate-50 text-3xl  font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We&apos;re here to help and answer any question you might have, We
              look forward to hearing from you! Please fill out the form, or
              reach us with the contact information given below .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <p className="text-lime-500">{submissionDisplay} </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jhon Doe"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>{}</p>
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jhon12@gmail.com"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Talent-Skool"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  type="text"
                  placeholder="Message"
                  name="message"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
            <div
              className={`${
                err !== "" ? "" : "hidden"
              } text-center px-2 py-2 text-red-600 mx-auto`}
            >
              {err}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact2 = () => {
  return (
    <>
      <Head>
        <title>Contact Us | TalentSkool</title>
      </Head>
      <section></section>
    </>
  );
};

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | TalentSkool</title>
      </Head>
      <div
        className="relative top-0 w-full h-[1200px] lg:h-[900px] bg-cover bg-no-repeat bg-center p-0 m-0 overflow-hidden hide-scrollbar"
        style={{ backgroundImage: `url('/contact_back.jpg')` }}
      >
        <Navbar />
        <Contact />
      </div>
        <Footer className="mt-0" />
    </>
  );
};
export default ContactPage;
