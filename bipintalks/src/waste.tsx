"use client";
import { useState } from "react";

const Write = () => {
const [note, setNote] = useState("");
const [publish, setPublished] = useState(false);

const handleOnSubmit = (e) =>{
e.preventDefault();
localStorage.setItem("userNote", note)
setPublished(true);
}



    return (
      <>
      <div className="bg-[#E5E7E9] flex items-center justify-center">
            <div className="mt-[10%] mb-10 bg-white p-8 shadow-lg md:w-[90%] md:h-[50vh]">
                {publish ? (
                    <div>
                        <h1 className="text-2xl font-bold text-green-600 mb-4">Note Saved!</h1>
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
                        <h1 className="text-3xl font-bold mb-6">Write Your Thoughts</h1>
                        <form onSubmit={handleOnSubmit}>
                            <textarea
                                className="w-full p-4 border rounded-lg mb-4"
                                placeholder="Write your thoughts here..."
                                rows="10"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Save Note
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
      </>
    );
};

export default Write;