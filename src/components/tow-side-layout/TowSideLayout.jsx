import React from "react";

function TowSideLayout({ children, imgUrl, reverse }) {
  return (
    <section className="md:container md:mx-auto px-3 py-20">
      <div
        className={`relative flex items-center flex-col-reverse  lg:flex-row align md:gap-8 lg:gap-12 gap-4 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col w-100 h-100">{children}</div>
        <div className="flex mx-auto items-center justify-center w-100 h-100">
          <img className="w-fit h-fit object-cover" src={imgUrl} />
        </div>
      </div>
    </section>
  );
}

export default TowSideLayout;
