import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";

const MainLayout = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const userImage = useSession().data?.user?.image || "";

  const cocks = api.cock.getAll.useQuery().data || [];
  // const cocksImage = cocks[0].image || {image: ""};
  return (
    <main className="full-screen flex flex-col items-center ">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {/*<div className="flex flex-row-reverse space-x-3 space-x-reverse">*/}
        <div className="flex items-center ">
          <img
            src={userImage}
            alt="userImage"
            className="mr-12 w-36 rounded-full"
          />
          <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-[5rem]">
            <span className="text-black">My</span> Website
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="" alt="" className="w-96 rounded-full" />
          {/* <p className="text-2xl text-white">Type 'string | null | undefined' is no
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p> */}
          <AuthShowcase />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
