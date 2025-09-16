import React from "react";
import { Link } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";

const RecipeItem = ({ recipe }) => {
  const { deletePost } = useDatabase("/recipes");
  const { id, title, overview, servings, prepMinutes, cookMinutes, image } =
    recipe;

  const details = [
    {
      icon: "../assets/images/icon-servings.svg",
      label: `Servings: ${servings}`,
      alt: "servings icon",
    },
    {
      icon: "../assets/images/icon-prep-time.svg",
      label: `Prep: ${prepMinutes} mins`,
      alt: "prep time icon",
    },
    {
      icon: "../assets/images/icon-cook-time.svg",
      label: `Cook: ${cookMinutes} mins`,
      alt: "cook time icon",
    },
  ];

  return (
    <li className="recipes__item">
      <picture>
        <source
          className="recipes__item-image"
          media="(max-width: 375px)"
          width={327}
          height={300}
          srcSet={image?.small}
        />
        <source
          className="recipes__item-image"
          media="(max-width: 768px)"
          width={680}
          height={600}
          srcSet={image?.small}
        />
        <img
          className="recipes__item-image"
          src={image?.large}
          alt={title}
          width={360}
          height={300}
        />
      </picture>

      <div className="recipes__info">
        <h2 className="recipes__item-title">{title}</h2>
        <p className="recipes__item-desc">{overview}</p>
      </div>

      <ul className="recipes__details">
        {details.map((d, index) => (
          <li key={index} className="recipes__details__item">
            <img src={d.icon} alt={d.alt} width={20} height={20} />
            <span className="recipes__details-prep">{d.label}</span>
          </li>
        ))}
      </ul>

      <Link to={`/recipe/${id}`} className="view__btn">
        View Recipe
      </Link>
    </li>
  );
};

export default RecipeItem;
