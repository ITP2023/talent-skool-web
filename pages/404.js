import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
      <main>
          <div className="max-w-screen-xl mx-auto flex items-center justify-start h-screen">
              <div className="max-w-screen mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
                  <div className="flex-1 max-w-screen">
                      <Image width={1825} height={600}
                      className="w-full"
                      src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80" />
                  </div>
                    <div className="space-y-3 max-w-lg flex-1 mt-12 md:mt-0 md:px-8 flex-grow">
                      <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                          Page not found
                      </p>
                      <p className="text-gray-600">
                          Sorry, the page you are looking for could not be found or has been removed.
                      </p>
                      <Link href="/" className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
                          Go back
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                          </svg>
                      </Link>
                    </div>
              </div>
          </div>
      </main>
  )
}

export default NotFoundPage;