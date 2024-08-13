import { FC } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";

export const Banner: FC = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-normal uppercase">Welcome to my world</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm {""}
            <span className="text-designColor capitalize">
              Mohamed Khaled Sakly
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a {""}
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I'm not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};
