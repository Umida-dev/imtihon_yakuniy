import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import RecipeItem from "../components/RecipeItem";

function Recipe() {
  const { id } = useParams();
  const { data: recipe, getPost } = useDatabase("/recipes/" + id);
  const { data: moreRecipes, getPost: getRecipes } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
    getRecipes();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <div className="recipe__bar container">
        <Link className="recipes__link" to="/recipes">
          Recipes
        </Link>
        <span>/</span>
        <p className="recipe__title">{recipe.title}</p>
      </div>

      <div className="recipe__info container">
        <picture>
          <source
            media="(max-width:768px)"
            width={704}
            height={683}
            srcSet={recipe.image?.small}
          />
          <source
            media="(max-width: 1192px)"
            width={618}
            height={600}
            srcSet={recipe.image?.large}
          />
          <img
            className="built__image"
            src={recipe.image?.small}
            alt={recipe.title}
            width={343}
            height={333}
          />
        </picture>

        <div className="recipe__info-right">
          <h2 className="recipe__info-title">{recipe.title}</h2>
          <p className="recipe__info-desc">{recipe.overview}</p>

          <ul className="recipe__detail">
            <li className="recipes__details__item">
              <img src="../assets/images/icon-servings.svg" alt="" />
              <p className="recipes__details-prep">Servings: {recipe.servings}</p>
            </li>
            <li className="recipes__details__item">
              <img src="../assets/images/icon-prep-time.svg" alt="" />
              <p className="recipes__details-prep">Prep: {recipe.prepMinutes}</p>
            </li>
            <li className="recipes__details__item">
              <img src="../assets/images/icon-cook-time.svg" alt="" />
              <p className="recipes__details-prep">Cook: {recipe.cookMinutes}</p>
            </li>
          </ul>

          <p className="recipe__info-ing">Ingredients:</p>
          <ul className="ingredient__list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <p className="ingredient">{ingredient}</p>
              </li>
            ))}
          </ul>

          <p className="recipe__info-ing">Instructions:</p>
          <ul className="inctruction">
            {recipe.instructions.map((step, index) => (
              <li key={index}>
                <p className="ingredient">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="more container">
        <p className="more__title">More recipes</p>
        <ul className="more__recipes">
          {moreRecipes
            ? moreRecipes
                .filter((r) => r.id !== recipe.id)
                .slice(0, 3)
                .map((r) => <RecipeItem key={r.id} recipe={r} />)
            : <li>Loading...</li>}
        </ul>
      </div>
    </div>
  );
}

export default Recipe;
