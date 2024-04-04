import React from "react";

function TowSideLayout({ children, imgUrl, reverse }) {
  return (
    <section className="md:mx-auto py-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div
        className={`relative flex items-center flex-col-reverse  lg:flex-row align md:gap-8 lg:gap-12 gap-4 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col w-100 h-100">{children}</div>
        <div className="flex mx-auto items-start justify-start w-100 h-100">
          <img className="w-fit h-fit object-cover" src={imgUrl} />
        </div>
      </div>
    </section>
  );
}

export default TowSideLayout;
