import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { status } from "../store/authSlice";
import authService from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

function Profile() {
  const isLoggedIn = useSelector(status);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
    return null;
  }

  const userData = useSelector((state) => state.auth.userData?.userData);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userName = userData?.name;
  const userEmail = userData?.email;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (userEmail) {
          const messages = await authService.getMessages(userEmail);
          setMessages(messages);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [userData]);

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmitMessage = async (event) => {
    event.preventDefault();

    if (!newMessage.trim()) return;

    setLoading(true);

    try {
      await authService.createMessage(userEmail, newMessage);
      setNewMessage("");
      setSuccessMessage("Message posted successfully!");
      const updatedMessages = await authService.getMessages(userEmail);
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    try {
      await authService.deleteMessage(messageId);
      const updatedMessages = messages.filter(
        (message) => message.id !== messageId
      );
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Hi. {userName}
        </h1>
        {isLoggedIn && (
          <div>
            {successMessage && (
              <p className="text-green-500 bg-green-100 px-4 py-2 rounded-md mb-4">
                {successMessage}
              </p>
            )}
            <form
              onSubmit={handleSubmitMessage}
              className="w-full mb-5 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <textarea
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 resize-none"
                  placeholder="How you feeling?"
                  value={newMessage}
                  onChange={handleMessageChange}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full border border-gray-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "Posting..." : "Post"}
                </button>
              </div>
            </form>

            <div className="container mx-auto mt-4 px-4">
              <div className="sm:flex justify-center">
                <div className="w-full sm:max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {messages.map((message) => (
                      <div
                        className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm dark:border flex items-center justify-between"
                        key={message.id}
                      >
                        <p className="text-gray-800 dark:text-white">
                          {message.text}
                        </p>
                        <button
                          onClick={() => handleDeleteMessage(message.id)}
                          className="text-red-600 hover:text-red-800 focus:outline-none bg-transparent border-none"
                        >
                          &#10006;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile;
