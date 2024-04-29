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
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Welcome to Echo
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Your Personal Vault of Memories and Reflections
              </p>
              <div className="mt-10">
                <a
                  href="/signup"
                  className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Get Started
                </a>
              </div>
            </div>
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
              src="https://images.pexels.com/photos/3617536/pexels-photo-3617536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.pexels.com/photos/1812527/pexels-photo-1812527.jpeg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
