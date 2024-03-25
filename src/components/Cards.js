import React from "react";
import "./style/Cards.css";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "reactstrap";
const Cards = () => {
  return (
    <section className="container-cards">
      <header className="title-cards">
        <h1>Name any, we got many</h1>
        <p>
          We are committed to maintaining the quality of our service for you.
          Customer-Focused, Results-Oriented, and Standards-Driven.
        </p>
      </header>
      <article className="sec-card">
        <div className="single-card">
          <img
            src="/Softwaredev.svg"
            alt="Software and Web Development"
            className="img-card bg-transparent"
          />
          <h2>Software and web development</h2>
          <p>
            Developing websites, web applications, custom software requirements,
            and complex system integrations.
          </p>
        </div>
        <div className="single-card">
          <img
            src="/Mobiledev.svg"
            alt="Mobile Development Services"
            className="img-card bg-transparent"
          />
          <h2>Mobile development</h2>
          <p>
            Looking to join the mobile revolutionary era and have your own app
            launched? Your search ends here.
          </p>
        </div>
        <div className="single-card">
          <img
            src="/UXDesign.svg"
            alt="UI/UX Design Services"
            className="img-card bg-transparent"
          />
          <h2>UI/UX design</h2>
          <p>
            Designing user interfaces and user experiences for engaging and
            intuitive digital products.
          </p>
        </div>
        <div className="single-card">
          <img
            src="/Softwaredev (1).svg"
            alt="Maintenance and Update Services"
            className="img-card bg-transparent"
          />
          <h2>Maintenance and update</h2>
          <p>
            After the product is delivered, we offer a 3-month-free follow-up
            because if we can spoil our customers, then why not?
          </p>
        </div>
        <div className="single-card">
          <img
            src="/Mobiledev (1).svg"
            alt="Analysis and Planning Services"
            className="img-card bg-transparent"
          />
          <h2>Analysis and planning</h2>
          <p>
            At this stage, you’ll have the chance to share your thoughts and
            requirements with the teams responsible to assist you with that.
          </p>
        </div>
        <div className="single-card">
          <img
            src="/Softwaredev (2).svg"
            alt="SEO Services"
            className="img-card bg-transparent"
          />
          <h2>SEO services</h2>
          <p>
            At Softylus Technologies, we understand the importance of SEO in
            today's digital landscape.
          </p>
        </div>
      </article>
      <Button
        className="btn-card"
        aria-label="See more services"
        href="/Services"
      >
        See more services
      </Button>
    </section>
  );
};

export default Cards;
