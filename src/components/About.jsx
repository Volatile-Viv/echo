import React from "react";

function About() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            A Portal to Your Memories
          </h2>
          <p>
            Our project offers users a unique platform to chronicle life's
            moments, storing memories securely and conveniently accessible
            anytime, anywhere. Like a personal online journal, it allows users
            to document experiences, emotions, and aspirations, fostering
            reflection and nostalgia. This innovative concept reimagines
            traditional note-taking, providing a space for users to curate their
            life's journey in a modern, accessible format. With its intuitive
            interface and robust backend support, our project invites users to
            embark on a journey of self-expression and introspection, preserving
            memories for generations to come.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
