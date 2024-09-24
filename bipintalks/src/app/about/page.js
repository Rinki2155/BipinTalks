import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-left mt-[15%]">
        <div className="text-left text-black px-4 py-2 md:ml-[130px] md:w-[60%] w-full">
          <div className="text-3xl md:text-5xl font-bold leading-snug animate-textd">
            About the author !
          </div>
          <div className="text-3xl md:text-5xl leading-snug animate-textd mt-[3%]">
            Welcome to the Author's corner!
          </div>{" "}
        </div>
      </div>
      <div className="w-full h-[100vh] md:h-[110vh] flex items-center justify-center mt-5">
        <div className="flex items-center justify-center p-4">
          <div className="text-left text-black px-4 py-2 md:w-[55%] w-full">
            <p className="text-base md:text-[17px] leading-relaxed text-center animate-textd">
              I am passionate about software engineering, technology,
              programming, and product management.
            </p>
            <p className="text-base md:text-[17px] leading-relaxed mt-10 text-center animate-textd">
              With a background in computer science, I love transforming complex
              problems into innovative solutions. My journey in tech involves
              designing scalable architectures, optimising algorithms, and
              staying updated with the latest trends. I am committed to creating
              impactful products by bridging the gap between technology and user
              needs.
            </p>
            <p className="text-base md:text-[17px] leading-relaxed mt-10 text-center animate-textd">
              Thank you for visiting my website. I look forward to sharing
              insights and projects with you.
            </p>

            <div className="text-base md:text-[17px] leading-relaxed mt-10 flex flex-col items-center">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=112,h=112,fit=crop/m5Kvn82LK2IL1KGq/4c4a3384-2-m7VwzKnoPQip62LD.jpeg"
                height={150}
                width={150}
                className="rounded-full"
              />
              <strong className="animate-textd">Bipin Singh</strong>
            </div>
            <p className="text-base md:text-[17px] leading-relaxed mt-6 text-center animate-textd">
              Technical Program Manager, Tata Digital
            </p>
            <h2 className="text-3xl md:text-5xl text-center leading-snug animate-textd mt-[10%]">
              Let's interact{" "}
            </h2>
            <p className="text-base md:text-[17px] leading-relaxed mt-10 text-center animate-textd">
              Write to us with your valuable feedback and topics you <br />{" "}
              would like read about !We appreciate your feedback and <br />
              will get back with more interesting articles and stories !
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-[100vh] flex items-center justify-center">
        <div className="w-full md:w-[70%] p-8 space-y-6 bg-purple-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Share a Word</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Enter your first name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Enter your email address*
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Enter your message*
              </label>
              <textarea
                placeholder="Type your message here"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Enter your phone number*
              </label>
              <input
                type="text"
                placeholder="Short answer"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <div className=" flex items-center justify-center">
                {" "}
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-300 text-gray-700 rounded-md font-medium hover:bg-yellow-400 focus:outline-none"
                >
                  Share a word
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
