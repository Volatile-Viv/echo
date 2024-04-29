import React from "react";
import { useSelector } from "react-redux";
import { status } from "../store/authSlice";
import authService from "../appwrite/appwriteConfig";

function Home() {
  const isLoggedIn = useSelector(status);

  const logoutHandler = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to Echo
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Your Personal Vault of Memories and Reflections
            </p>

            <a
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Get Started
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              A Portal to Your Memories
            </h2>
            <p>
              Our project offers users a unique platform to chronicle life's
              moments, storing memories securely and conveniently accessible
              anytime, anywhere. Like a personal online journal, it allows users
              to document experiences, emotions, and aspirations, fostering
              reflection and nostalgia. This innovative concept reimagines
              traditional note-taking, providing a space for users to curate
              their life's journey in a modern, accessible format. With its
              intuitive interface and robust backend support, our project
              invites users to embark on a journey of self-expression and
              introspection, preserving memories for generations to come.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
