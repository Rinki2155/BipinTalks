"use client";
import { useState } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [note, setNote] = useState("");
  const [publish, setPublished] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userNote", note);
    localStorage.setItem("userTitle", title);
    localStorage.setItem("userStory", story);
    setPublished(true);
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="mt-[10%] mb-10  p-8 shadow-lg md:w-[80%]  md:h-[100vh]">
        {publish ? (
          <div>
            <h1 className="text-2xl font-bold text-green-600 mb-4">
              Note Saved!
            </h1>
            <p>Your note has been saved successfully.</p>
            <button
              onClick={() => setPublished(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Write Another Note
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold">Write Your Story</h1>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Save Note
                </button>
              </div>
            </div>

            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                className="w-full text-4xl font-bold text-gray-700 focus:outline-none mb-4 border-b-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ fontSize: title ? "45px" : "inherit" }}
              />
              <input
                type="text"
                className="w-full text-lg text-gray-700 focus:outline-none mb-4"
                placeholder="Tell your story..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                style={{ fontSize: "20px" }}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
