import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Echo- Your Secret Time Capsule
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Echo is a special place where you can share your deepest feelings,
          thoughts, and memories in complete privacy. It's like a personal
          vault, securely storing your emotions and experiences, allowing you to
          revisit them whenever you want, far into the future.
        </p>
        <h2 className="text-2xl font-bold mb-4">Why Echo?</h2>
        <p className="text-lg text-gray-800 mb-8">
          In today's fast-paced world, it's easy to forget the moments that
          truly matter. Our Secret Time Capsule provides a safe haven for your
          emotions, ensuring that your precious memories are preserved for
          eternity. Whether it's a cherished memory, a hidden desire, or a
          heartfelt confession, you can entrust it to our secure vault.
        </p>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="font-semibold">Create Your Account:</span> Sign up
            for an account to access your personal time capsule.
          </li>
          <li>
            <span className="font-semibold">Share Your Thoughts:</span> Write
            down your feelings, thoughts, or memories in our secure platform.
          </li>
          <li>
            <span className="font-semibold">Seal Your Capsule:</span> Safely
            store your entries in your private vault, knowing they'll remain
            confidential.
          </li>
          <li>
            <span className="font-semibold">Revisit Anytime:</span> Come back
            whenever you want to reflect on your past, gain insight into your
            present, or dream about your future.
          </li>
        </ol>
        <h2 className="text-2xl font-bold mb-4">Privacy & Security</h2>
        <p className="text-lg text-gray-800 mb-8">
          We take your privacy and security seriously. Your entries are
          encrypted and stored securely, ensuring that only you have access to
          your personal time capsule.
        </p>
        <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg text-gray-800 mb-8">
          Join Our Secret Time Capsule today and start preserving your memories
          for the future. Sign up now and embark on a journey of self-discovery,
          reflection, and personal growth.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-800 mb-8">
          Have questions or need assistance? Feel free to reach out to us at{" "}
          <a href="mailto:creatorvivek18@gmail.com" className="text-blue-500">
            creatorvivek18@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
