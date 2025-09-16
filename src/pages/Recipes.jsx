import React, { useEffect, useState } from "react";
import FilterPanel from "../components/FilterOptions";
import { useDatabase } from "../hooks/UseDatabase";
import RecipeItem from "../components/RecipeItem";

function Recipes() {
  const { getPost, data } = useDatabase("/recipes");
  const [search, setSearch] = useState("");

  const [prepFilters, setPrepFilters] = useState([]);
  const [cookFilters, setCookFilters] = useState([]);
  const [isPrepOpen, setIsPrepOpen] = useState(false);
  const [isCookOpen, setIsCookOpen] = useState(false);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const filteredData = data
    ? data.filter((recipe) => {
        let match = true;

        if (search.trim()) {
          const lowerSearch = search.toLowerCase();
          match = match && recipe.title?.toLowerCase().includes(lowerSearch);
        }

        if (prepFilters.length) {
          const prepMinutes = recipe.prepMinutes;
          const prepValues = prepFilters.map((f) =>
            parseInt(f.split("-")[0], 10)
          );
          match = match && prepValues.includes(prepMinutes);
        }

        if (cookFilters.length) {
          const cookMinutes = recipe.cookMinutes;
          const cookValues = cookFilters.map((f) =>
            parseInt(f.split("-")[0], 10)
          );
          match = match && cookValues.includes(cookMinutes);
        }

        return match;
      })
    : [];

  const prepOptions = [
    { value: "0-min-prep", label: "0 minutes" },
    { value: "5-min-prep", label: "5 minutes" },
    { value: "10-min-prep", label: "10 minutes" },
  ];

  const cookOptions = [
    { value: "0-min-cook", label: "0 minutes" },
    { value: "5-min-cook", label: "5 minutes" },
    { value: "10-min-cook", label: "10 minutes" },
    { value: "15-min-cook", label: "15 minutes" },
    { value: "20-min-cook", label: "20 minutes" },
  ];

  return (
    <>
      <section>
        <div className="container simple__container">
          <h1 className="simple__title">Explore our simple, healthy recipes</h1>
          <p className="simple__desc">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
      </section>

      <section>
        <div className="container recipes__filter">
          <div className="filters__wrapper">
            <FilterPanel
              activeFilters={prepFilters}
              setActiveFilters={setPrepFilters}
              isOpen={isPrepOpen}
              setIsOpen={setIsPrepOpen}
              title="Max Prep Time"
              options={prepOptions}
            />
            <FilterPanel
              activeFilters={cookFilters}
              setActiveFilters={setCookFilters}
              isOpen={isCookOpen}
              setIsOpen={setIsCookOpen}
              title="Max Cook Time"
              options={cookOptions}
            />
          </div>

          <div className="search__wrapper">
            <input
              className="search"
              type="search"
              placeholder="Search by name or ingredient…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              className="search__icon"
              src="./assets/images/icon-search.svg"
              alt="search"
            />
          </div>
        </div>
      </section>

      <ul className="recipes__list container">
        {!data && <li>Loading...</li>}
        {filteredData.length === 0 && data && <li>No recipes found</li>}
        {filteredData.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </>
  );
}

export default Recipes;
