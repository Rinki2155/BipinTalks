import Image from "next/image";

const About = () => {
  return (
    <>
      {/* Main About Section */}
      <div className="flex items-center justify-left pt-[15%]">
        <div className="text-left text-black px-4 py-2 md:ml-[130px] md:w-[60%] w-full">
          <div className="section-heading animate-textd">About the author!</div>
          <div className="section-heading animate-textd mt-6">
            Welcome to the Author's corner!
          </div>
        </div>
      </div>

      {/* Image and Description Section */}
      <div className="section-wrapper">
        <div className="content-text-wrapper">
          <p className="content-text animate-textd">
            I am passionate about software engineering, technology, programming,
            and product management.
          </p>
          <p className="content-text mt-6 animate-textd">
            With a background in computer science, I love transforming complex
            problems into innovative solutions. My journey in tech involves
            designing scalable architectures, optimizing algorithms, and staying
            updated with the latest trends. I am committed to creating impactful
            products by bridging the gap between technology and user needs.
          </p>
          <p className="content-text mt-6 animate-textd">
            Thank you for visiting my website. I look forward to sharing insights
            and projects with you.
          </p>

          {/* Author's Image */}
          <div className="author-info">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=112,h=112,fit=crop/m5Kvn82LK2IL1KGq/4c4a3384-2-m7VwzKnoPQip62LD.jpeg"
              height={150}
              width={150}
              className="rounded-full"
              alt="Author Image"
            />
            <strong className="mt-4 animate-textd">Bipin Singh</strong>
            <p className="content-text mt-2 animate-textd">
              Technical Program Manager, Tata Digital
            </p>
          </div>

          {/* Call to Interaction */}
          <h2 className="section-heading text-center mt-10 animate-textd">
            Let's interact
          </h2>
          <p className="content-text text-center animate-textd">
            Write to us with your valuable feedback and topics you'd like to read
            about!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="section-wrapper">
        <div className="form-wrapper">
          <h2 className="form-heading">Share a Word</h2>

          <form className="space-y-4">
            <FormInput label="Enter your first name" type="text" placeholder="John" />
            <FormInput label="Enter your email address*" type="email" placeholder="example@example.com" />
            <FormTextArea label="Enter your message*" placeholder="Type your message here" />
            <FormInput label="Enter your phone number*" type="text" placeholder="Short answer" />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="btn-submit"
              >
                Share a word
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const FormInput = ({ label, type, placeholder }) => (
  <div>
    <label className="form-label">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="form-input"
    />
  </div>
);

const FormTextArea = ({ label, placeholder }) => (
  <div>
    <label className="form-label">{label}</label>
    <textarea
      placeholder={placeholder}
      className="form-input"
      rows="4"
    ></textarea>
  </div>
);

export default About;
