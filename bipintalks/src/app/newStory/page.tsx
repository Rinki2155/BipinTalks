"use client";
import { useState, useRef, useEffect } from "react";

export default function DraftPage() {
  const [title, setTitle] = useState(""); // State for title
  const [story, setStory] = useState(""); // State for story
  const [error, setError] = useState(""); // State for error message
  const [success, setSuccess] = useState(""); // State for success message
  const titleRef = useRef<HTMLDivElement>(null); // Ref for title
  const storyRef = useRef<HTMLDivElement>(null); // Ref for story

  const handleFocus = (
    ref: React.RefObject<HTMLDivElement>,
    defaultText: string
  ) => {
    if (ref.current?.innerText === defaultText) {
      ref.current.innerText = ""; // Clear placeholder text
    }
  };

  const handleBlur = (ref: React.RefObject<HTMLDivElement>, defaultText: string) => {
    if (!ref.current) return; // Exit if ref is null
  
    if (!ref.current.innerText.trim()) {
      ref.current.innerText = defaultText; // Reset placeholder text if field is empty
    }
  };
  

  const handlePublish = () => {
    const currentTitle = titleRef.current?.innerText.trim() || ""; // Get title content
    const currentStory = storyRef.current?.innerText.trim() || ""; // Get story content

    // Validation check
    if (!currentTitle || !currentStory) {
      setError("Both fields are required."); // Show error if fields are empty
      setSuccess(""); // Clear success message if present
    } else {
      setError(""); // Clear error if both fields have content
      setSuccess("Story Published!"); // Show success message
      localStorage.setItem("userTitle", currentTitle); // Save title in localStorage
      localStorage.setItem("userStory", currentStory); // Save story in localStorage

      // Automatically hide success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  };

  // Function to track changes in title and story
  useEffect(() => {
    const handleInput = () => {
      const currentTitle = titleRef.current?.innerText.trim() || ""; // Update title state
      const currentStory = storyRef.current?.innerText.trim() || ""; // Update story state

      setTitle(currentTitle); // Update title
      setStory(currentStory); // Update story
    };

    // Add event listeners for detecting changes in contentEditable fields
    titleRef.current?.addEventListener("input", handleInput);
    storyRef.current?.addEventListener("input", handleInput);

    // Cleanup event listeners when component unmounts
    return () => {
      titleRef.current?.removeEventListener("input", handleInput);
      storyRef.current?.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <main
      role="main"
      className="bg-white flex items-center justify-center min-h-screen mt-[10%]"
      style={{ color: "#b3b3b1", lineHeight: "1.9" }}
    >
      <article className="min-h-[calc(100vh-65px)] p-8 md:w-[80%]">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0"></div>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          {/* Publish Button */}
          <button
            onClick={handlePublish}
            className={`px-6 text-white rounded-[1.25rem] transition-all ${
              title || story
                ? "bg-[#1a8917] hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!title || !story} // Disable button unless both fields are filled
          >
            Publish
          </button>
        </div>

        {/* Title Section */}
        <div
          ref={titleRef}
          contentEditable
          onFocus={() => handleFocus(titleRef, "Title")}
          onBlur={() => handleBlur(titleRef, "Title")}
          className="text-5xl font-bold border-b-2 outline-none mb-4"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Title
        </div>

        {/* Story Section */}
        <div
          ref={storyRef}
          contentEditable
          onFocus={() => handleFocus(storyRef, "Tell your story...")}
          onBlur={() => handleBlur(storyRef, "Tell your story...")}
          className="h-64 outline-none resize-none"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Tell your story...
        </div>
      </article>
    </main>
  );
}
