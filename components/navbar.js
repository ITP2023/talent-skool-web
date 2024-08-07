import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 *
 * @param {{ fixed: boolean }} param0
 * @returns
 */
const Navbar = ({ fixed }) => {
  const ROUTES = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About Us",
      link: "/about",
    },
    {
      text: "Mentors",
      link: "/mentors",
    },
    {
      text: "Network",
      link: "/network",
    },
    {
      text: "Contact Us",
      link: "/contact",
    },
  ];
  const router = useRouter();

  const [backdrop, setBackdrop] = useState(false);
  // const [isScrolledDown, setIsScrolledDown] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [preventScroll, setPreventScroll] = useState(false); // New state

  // const handleScroll = () => {
  //   if (!preventScroll) {
  //     const currentScrollPos = window.scrollY;

  //     if (prevScrollPos > currentScrollPos) {
  //       setIsScrolledDown(false);
  //     } else {
  //       setIsScrolledDown(true);
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  // useEffect(() => {
  //   if (preventScroll) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [preventScroll]);

  return (
    // <header
    //   className={`top-0 z-20 inset-x-0 transition-transform duration-300`}
    // >
    //   <nav
    //     className={`flex items-center lg:justify-between p-6 lg:px-8`}
    //     aria-label="Global"
    //   >
    //     <div
    //       className="flex flex-grow justify-center lg:justify-start lg:flex-1 transition-opacity duration-300"
    //     >
    //       <Link href="/" className="-m-1.5 p-1.5">
    //         <div className="flex lg:flex-1 shadow-neon p-3 rounded-full shadow-neon bg-black">
    //           <h2 className="text-primary text-4xl font-extrabold">Talent</h2>
    //           <h2 className="text-4xl text-white font-extrabold">Skool</h2>
    //         </div>
    //       </Link>
    //     </div>
    //     <div
    //       onClick={() => {
    //         setBackdrop(true);
    //         // setPreventScroll(true); // Set preventScroll to true when backdrop is clicked
    //       }}
    //       className={`flex lg:hidden bg-black rounded-full p-2 ${
    //         backdrop ? "hidden" : "shadow-neon"
    //       }`}
    //     >
    //       <button
    //         type="button"
    //         className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-primary"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           aria-hidden="true"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       className={`hidden lg:flex px-6 py-3 rounded-full lg:gap-x-12 lg:bg-black lg:text-white shadow-neon`}
    //     >
    //       {ROUTES.map((item, i) => (
    //         <Link
    //           key={i}
    //           href={item.link}
    //           className={`lg:text-sm lg:font-semibold lg:leading-6 hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-4 hover:scale-125 duration-300 ${
    //             router.pathname === item.link
    //               ? "underline underline-offset-4 decoration-primary decoration-4"
    //               : ""
    //           }`}
    //         >
    //           {item.text}
    //         </Link>
    //       ))}
    //     </div>
    //     <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6">
    //       <Link
    //         href="/"
    //         className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-110 duration-300 shadow-neon"
    //       >
    //         Log In
    //       </Link>
    //       <Link
    //         href="/signup"
    //         className="text-black border-solid border-2 border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:scale-110 duration-300 shadow-neon"
    //       >
    //         <p className="text-black">Sign Up</p>
    //       </Link>
    //     </div>
    //   </nav>
    //   {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
    //   <div className={`h-screen ${backdrop ? "":"hidden"}`} role="dialog" aria-modal="true">
    //     {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}

    //     <div className={`opacity-60 relative inset-0 z-50 bg-black max-h-screen`}></div>

    //     {/* { backdrop ?  */}
    //     <div
    //       className={`fixed inset-y-0 z-50 max-h-screen w-1/4 overflow-y-auto opacity-60 bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-500 ${
    //         backdrop ? "translate-y-0" : "translate-y-[-100%]"
    //       } top-0 right-0 flex flex-col justify-start items-end`}
    //     >
    //       <div className="flex items-center justify-between">
    //         <button
    //           onClick={() => {
    //             setBackdrop(false);
    //             // setPreventScroll(false);
    //           }}
    //           type="button"
    //           className="-m-2.5 rounded-md p-2.5 text-white"
    //         >
    //           <span className="sr-only">Close menu</span>
    //           <svg
    //             className="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="mt-6">
    //         <div className="-my-6 divide-y divide-gray-500/10">
    //           <div className="space-y-2 py-6">
    //             {ROUTES.map((r, i) => (
    //               <Link
    //                 key={i}
    //                 href={r.link}
    //                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:decoration-white hover:underline hover:underline-offset-4 hover:scale-125 duration-300"
    //               >
    //                 {r.text}
    //               </Link>
    //             ))}
    //           </div>
    //           <div className="flex flex-col py-6 gap-4">
    //             <Link
    //               href="/signup"
    //               className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white hover:decoration-primary hover:underline hover:underline-offset-4 hover:scale-125 duration-300"
    //             >
    //               Log in
    //             </Link>

    //             <Link
    //               href="/signup"
    //               className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white hover:decoration-primary hover:underline hover:underline-offset-4 hover:scale-125 duration-300"
    //             >
    //               Sign Up
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* : <div className="hidden" /> */}
    //     {/* } */}
    //   </div>
    // </header>
    <header
    className={`top-0 z-20 inset-x-0 transition-transform duration-300`}
  >
    <nav
      className={`flex items-center lg:justify-between p-6 lg:px-8`}
      aria-label="Global"
    >
      <div
        className="flex flex-grow justify-center lg:justify-start lg:flex-1 transition-opacity duration-300"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <div className="flex lg:flex-1 shadow-neon p-3 rounded-full shadow-neon bg-black">
            <h2 className="text-primary text-4xl font-extrabold">Talent</h2>
            <h2 className="text-4xl text-white font-extrabold">Skool</h2>
          </div>
        </Link>
      </div>
      <div
        onClick={() => {
          setBackdrop(true);
          // setPreventScroll(true); // Set preventScroll to true when backdrop is clicked
        }}
        className={`flex lg:hidden bg-black rounded-full p-2 ${
          backdrop ? "opacity-0" : "shadow-neon"
        }`}
      >
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-primary"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`hidden lg:flex px-6 py-3 rounded-full lg:gap-x-12 lg:bg-black lg:text-white shadow-neon`}
      >
        {ROUTES.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`lg:text-sm lg:font-semibold lg:leading-6 hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-4 hover:scale-125 duration-300 ${
              router.pathname === item.link
                ? "underline underline-offset-4 decoration-primary decoration-4"
                : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6">
        <Link
          href="/"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-110 duration-300 shadow-neon"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="text-black border-solid border-2 border-black rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:scale-110 duration-300 shadow-neon"
        >
          <p className="text-black">Sign Up</p>
        </Link>
      </div>
    </nav>
    {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
    {/* <div className={`fixed h-screen ${backdrop ? "opacity-100 bg-black z-40":"opacity-0 z-0"}`} role="dialog" aria-modal="true"></div> */}
      {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}

      {/* <div className={`opacity-60 relative inset-0 z-50 bg-black max-h-screen`}></div> */}

      {/* { backdrop ?  */}
      <div
        className={`fixed inset-y-0 z-50 max-h-screen w-1/4 overflow-y-auto opacity-60 bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-translate duration-500 ${
          backdrop ? "translate-y-0" : "translate-y-[-100%]"
        } top-0 right-0 flex flex-col justify-start items-end`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setBackdrop(false);
              // setPreventScroll(false);
            }}
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6">
          <div className="-my-6">
            <div className="space-y-2 py-6">
              {ROUTES.map((r, i) => (
                <Link
                  key={i}
                  href={r.link}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:decoration-white hover:underline hover:underline-offset-4 hover:scale-125 duration-300"
                >
                  {r.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col py-6 gap-4">
              <Link
                href="/signup"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white hover:decoration-primary hover:underline hover:underline-offset-4 hover:scale-125 duration-300"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white hover:decoration-primary hover:underline hover:underline-offset-4 hover:scale-125 duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* : <div className="hidden" /> */}
      {/* } */}
    {/* </div> */}
  </header>
  );
};

export default Navbar;
