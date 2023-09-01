// import Image from "next/image";
// import { useState, useContext, useEffect, createContext } from "react";
// import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
// import { v4 as uuidv4 } from "uuid";

// const supabase = createPagesBrowserClient();

// class UserModel {
//   constructor(authorId = "", name = "John Doe") {
//     this.author_id = authorId;
//     this.name = name;
//   }
// }

// const UserContext = createContext({ user: "", setUser: (fn) => fn() });



// /**
//  *
//  * @param {string} userId
//  */
// const useSupabaseChat = (userId) => {
//   const [messages, setMessages] = useState([]);


//   useEffect(() => {
//     if (!userId) return () => { console.log("empty user"); }
//     const messageListener = supabase
//       .channel("public:messages")
//       .on(
//         "postgres_changes",
//         {
//           event: "*",
//           schema: "public",
//           table: "messages",
//           filter: "to=neq." + userId,
//         },
//         (payload) => {
//           setMessages((pm) => pm.concat(payload.new));
//         }
//       )
//       .subscribe();
//     () => {
//       supabase.removeChannel(messageListener);
//     };
//   }, [userId]);

//   return {
//     messages,
//   };
// };

// /**
//  *
//  * @param {{ shown: boolean, setModal: (fn: (p: boolean) => boolean) => void }} param0
//  * @returns
//  */
// const UserDataModal = ({ shown, setModal }) => {
//   const [username, setName] = useState("");
//   const { setUser } = useContext(UserContext);


//   const createUserFn = async () => {
//     try {
//       const newUserId = uuidv4();
//       await supabase.from("users").insert([new UserModel(newUserId, username)]);
//       setUser(_ => newUserId);
//       setModal((p) => false);
//     } catch (e) {
//       console.log("[Supabase]: ", e);
//     }
//   };

//   return (
//     <div
//       className={`${
//         shown ? "" : "hidden"
//       } z-40 fixed top-40 right-0 left-0 bg-white w-11/12 mx-auto rounded-xl p-4`}
//     >
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           createUserFn();
//         }}
//         className="w-full p-4 flex flex-col"
//       >
//         <p className="text-xl text-center my-4">You are just one step away</p>
//         <input
//           className="peer w-full text-xl p-4 border-2 border-black rounded-xl"
//           type="text"
//           placeholder="Enter your name so we may address you better"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <p className="opacity-0 peer-invalid:opacity-100 text-red-400">
//           Only Alphabets allowed
//         </p>
//         <button
//           type="submit"
//           className="peer-invalid:hidden bg-primary p-4 rounded-xl text-white mx-auto mt-4"
//         >
//           Let's start
//         </button>
//       </form>
//     </div>
//   );
// };

// const MessageInputField = () => {
//   const [content, setContent] = useState("");

//   const { setUser, user } = useContext(UserContext);


//   const sendMessage = async () => {
//     try {
//       await supabase.from("messages").insert([
//         {
//           id: uuidv4(),
//           created_at: new Date().toISOString(),
//           content: content,
//           author_id: user,
//         },
//       ]);
//     } catch (e) {
//       console.log(`Supabase: ${e}`);
//     }
//   };

//   return (
//     <div className="fixed bottom-0 w-full bg-primary">
//       <form
//         className="p-2 flex flex-row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           sendMessage();
//         }}
//       >
//         <input
//           placeholder="Send us a message..."
//           className="grow text-lg p-4 rounded-xl"
//           type="text"
//           onChange={(e) => {
//             setContent((_) => e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           className="bg-yellow-400 text-black text-center rounded-full w-16 h-16 ml-4 text-3xl"
//         >
//           <Image className="m-auto" src="/send.png" width={30} height={30} />
//         </button>
//       </form>
//     </div>
//   );
// };
// /**
//  *
//  * @returns
//  */
// const Testing = () => {
//   const [showUserDataModal, setUserDataModalDisplay] = useState(true);
//   const [userId, setUserId] = useState("");
//   const { messages } = useSupabaseChat(userId);

//   console.log(messages)

  
//   return (
//     <UserContext.Provider value={{ user: userId, setUser: setUserId }}>
//       <UserDataModal
//         shown={showUserDataModal}
//         setModal={setUserDataModalDisplay}
//       />
//       <div
//         className={`${
//           showUserDataModal ? "" : "hidden"
//         } z-20 absolute w-screen h-screen bg-black opacity-40`}
//       ></div>
//       <section className="w-screen h-screen">
//         <div className="w-full bg-primary text-white p-4">
//           <p className="text-3xl text-center">Chat with Us</p>
//         </div>
//         <div className="h-auto w-full mt-12">
//           {messages.map((m, i) => (
//             <div key={i} className="flex flex-col items-end">
//               <div
//                 key={i}
//                 className={`${
//                   m.author_id === "6dacb59f-4b68-4999-aa81-b05593759e24"
//                     ? "p-4 bg-gray-50 text-black text-left ml-2"
//                     : "p-4 bg-primary text-white text-right mr-2"
//                 } rounded-xl
//                 `}
//               >
//                 <p className="text-xl">{m.content}</p>
//               </div>
//               <span className={m.author_id === "6dacb59f-4b68-4999-aa81-b05593759e24" ? "ml-2" : "mr-2"}>{new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(new Date(m.created_at))}</span>
//             </div>
//           ))}
//         </div>
//         <MessageInputField />
//       </section>
//     </UserContext.Provider>
//   );
// };

// export default Testing;

import Image from "next/image";


const Testing = () => {
  return (
    <section className="w-screen h-1/2">
      <div className="bg-black absolute z-0 h-full w-full overflow-hidden">
        <Image
          src={"https://randomuser.me/api/portraits/men/72.jpg"}
          width={100}
          height={100}
          alt="icon"
          className="translate-x-[10em] rounded-full"
        />
      </div>
      <div className="container relative z-10 flex h-full">
        <div className="max-w-6xl text-2xl font-semibold leading-relaxed md:text-4xl lg:text-6xl">
          <h1 className="text-white text-center">
            Learn and grow with the help of world-class mentors.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Testing;