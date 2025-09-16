import React from "react";
import SmartCook from "../components/SmartCook";

function About() {
  const existItems = [
    {
      title: "Cut through the noise.",
      desc: `The internet is bursting with recipes, yet most busy cooks still
        default to take-away or packaged foods. We curate a tight
        collection of fool-proof dishes so you can skip the scrolling
        and start cooking.`,
    },
    {
      title: "Empower home kitchens.",
      desc: `When you control what goes into your meals, you control how you
        feel. Every recipe is built around unrefined ingredients and
        ready in about half an hour of active prep.`,
    },
    {
      title: "Make healthy look good.",
      desc: `High-resolution imagery shows you exactly what success looks
        like—because we eat with our eyes first, and confidence matters.`,
    },
  ];

  const philosophyItems = [
    {
      title: "Whole ingredients first.",
      desc: `Fresh produce, grains, legumes, herbs, and quality fats form the
        backbone of every recipe.`,
    },
    {
      title: "Flavor without compromise.",
      desc: `Spices, citrus, and natural sweetness replace excess salt,
        sugar, and additives.`,
    },
    {
      title: "Respect for time.",
      desc: `Weeknight meals should slot into real schedules; weekend cooking
        can be leisurely but never wasteful.`,
    },
    {
      title: "Sustainable choices.",
      desc: `Short ingredient lists cut down on food waste and carbon
        footprint, while plant-forward dishes keep things
        planet-friendly.`,
    },
  ];

  const beyondItems = [
    "Encourage family dinners and social cooking.",
    "Reduce reliance on single-use packaging and delivery waste.",
    "Spark curiosity about seasonal produce and local agriculture.",
  ];

  return (
    <>
      <section>
        <div className="container built__container">
          <div className="mission__info">
            <p className="mission__our">Our mission</p>
            <h3 className="built__title">
              Help more people cook nourishing meals, more often.
            </h3>
            <p className="built__desc__more">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="built__desc">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="./assets/images/image-about-our-mission-small.webp"
            />
            <source
              media="(max-width: 768px)"
              srcSet="./assets/images/image-about-our-mission-small.webp"
            />
            <source
              media="(max-width: 1192px)"
              srcSet="./assets/images/image-about-our-mission-large.webp"
            />
            <img
              className="built__image"
              src="./assets/images/image-about-our-mission-large.webp"
              alt="About our mission"
            />
          </picture>
        </div>
      </section>

      <section className="container">
        <div className="exist__container">
          <h2 className="exist__title">Why we exist</h2>
          <ul className="exist__list">
            {existItems.map((item, index) => (
              <li key={index} className="exist__item">
                <h4 className="exist__item-title">{item.title}</h4>
                <p className="exist__item-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="exist__container">
          <h2 className="exist__title">Our food philosophy</h2>
          <ul className="exist__list">
            {philosophyItems.map((item, index) => (
              <li key={index} className="exist__item">
                <h4 className="exist__item-title">{item.title}</h4>
                <p className="exist__item-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container built__container">
          <div className="mission__info">
            <h3 className="built__title">Beyond the plate</h3>
            <p className="beyond__desc">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="beyond__list">
              {beyondItems.map((text, index) => (
                <li key={index} className="beyond__item">
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <picture>
            <source
              media="(max-width:768px)"
              width={704}
              height={683}
              srcSet="./assets/images/image-about-beyond-the-plate-large.webp"
            />
            <source
              media="(max-width: 1192px)"
              width={618}
              height={600}
              srcSet="./assets/images/image-about-beyond-the-plate-large.webp"
            />
            <img
              className="built__image"
              src="./assets/images/image-about-beyond-the-plate-small.webp"
              alt=""
              width={343}
              height={333}
            />
          </picture>
        </div>
      </section>

      <div className="container">
        <SmartCook />
      </div>
    </>
  );
}

export default About;
