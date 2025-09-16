import React from "react";
import SmartCook from "../components/SmartCook";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: "./assets/images/icon-whole-food-recipes.svg",
      title: "Whole-food recipes",
      desc: "Each dish uses everyday, unprocessed ingredients.",
      alt: "icon-carrot",
    },
    {
      icon: "./assets/images/icon-minimum-fuss.svg",
      title: "Minimum fuss",
      desc: "All recipes are designed to make eating healthy quick and easy.",
      alt: "icon-flash",
    },
    {
      icon: "./assets/images/icon-search-in-seconds.svg",
      title: "Search in seconds",
      desc: "Filter by name or ingredient and jump straight to the recipe you need.",
      alt: "icon-search",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h2 className="hero__title">
            <span className="highlight">Healthy</span> meals, zero fuss
          </h2>
          <p className="hero__desc">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <div className="hero__container">
            <Link to="/recipes" className="btn start__btn">
              Start exploring
            </Link>
            <img
              className="hero__image"
              src="./assets/images/image-home-hero-large.webp"
              alt=""
              width={1192}
              height={530}
            />
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="get__title">What you’ll get</div>
          <ul className="get__list">
            {features.map((f, index) => (
              <li key={index}>
                <img
                  className="get__item-image"
                  src={f.icon}
                  width={60}
                  height={60}
                  alt={f.alt}
                />
                <h4 className="get__item-title">{f.title}</h4>
                <p className="get__item-desc">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="built__container">
          <div className="built__info">
            <h3 className="built__title">Built for real life</h3>
            <p className="built__desc__more">
              Cooking shouldn’t be complicated. These recipes come in under 30
              minutes of active time, fit busy schedules, and taste good enough
              to repeat.
            </p>
            <p className="built__desc">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <img
            className="build__image"
            src="./assets/images/image-home-real-life-large.webp"
            alt="Real life cooking"
            width={635}
            height={450}
          />
        </div>
      </section>

      <div className="container">
        <SmartCook />
      </div>
    </>
  );
}

export default Home;
