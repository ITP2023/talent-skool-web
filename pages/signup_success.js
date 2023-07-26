import Image from "next/image";
import Head from "next/head";

const SignUpSuccess = () => {
  return (
    <div className="max-w-screen h-screen bg-gray-100 m-auto">
      <Head>
        <title>Success!</title>
      </Head>
        <div className="bg-white flex flex-col items-center justify-between space-y-6 w-1/2 h-auto p-6 rounded-xl fixed left-[25%] top-10">
          <div className="h-1/2 w-full">
            <Image alt="icon_success" width={100} height={100} src="/check.png" className="w-[100px] h-[100px] mx-auto" />
          </div>
          
          <div className="h-1/2 w-full">
            <p className="text-2xl font-bold text-center">Success!</p>
            <p className="mt-4 text-center">We&apos;ve created your account and will notify you when we launch</p>
          </div>
        </div>
    </div>
  );
}

export default SignUpSuccess;