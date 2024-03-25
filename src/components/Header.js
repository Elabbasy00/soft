import React from "react";
import "./style/Header.css";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "reactstrap";
import { Link } from "gatsby";
const Header = ({
  Title,
  SubHeading,
  buttonText,
  onButtonClick,
  imageSrc,
  altText,
  className,
  overSpan,
}) => {
  return (
    <header className="bg-hero-pattern bg-cover	bg-right-center bg-no-repeat min-h-screen flex ">
      <div className="grid max-w-screen-xl py-8 min-w-full  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        <div className="mr-auto place-self-center px-4">
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {Title}
            <span className={`${className}`}> Softylus</span>
            {overSpan}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {SubHeading}
          </p>

          <Link
            to="/ContactUs"
            className="no-underline inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 "
          >
            Speak to Sales <img src="/Arrow 1 (1).svg" className="mx-2" />
          </Link>
        </div>
        <div className="lg:mt-0  lg:flex w-100 h-100 bg-transparent">
          <img src="/img-hero.svg" alt="Describe the image here" />
        </div>
      </div>
    </header>
  );
};

export default Header;

// lg:col-span-6
// lg:col-span-6
// mx-auto
