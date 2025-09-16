import React, { useEffect } from "react";
import { useDatabase } from "../hooks/UseDatabase";

function CreateRecipe() {
  const { postData, getPost } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
  }, [getPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title").trim();
    const img = formData.get("image").trim();
    const overview = formData.get("overview").trim();
    const servings = formData.get("servings");
    const prepMinutes = formData.get("prepMinutes");
    const cookMinutes = formData.get("cookMinutes");
    const ingredients = formData
      .get("ingredients")
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
    const instructions = formData
      .get("instructions")
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    if (
      title &&
      img &&
      overview &&
      servings &&
      prepMinutes &&
      cookMinutes &&
      ingredients.length &&
      instructions.length
    ) {
      postData({
        title,
        image: { small: img, large: img },
        overview,
        servings: Number(servings),
        prepMinutes: Number(prepMinutes),
        cookMinutes: Number(cookMinutes),
        ingredients,
        instructions,
      });
      alert("Recipe added successfully");
      e.target.reset();
    } else {
      alert("Please fill in all fields");
    }
  };

  const inputs = [
    { type: "text", name: "title", placeholder: "Title" },
    { type: "url", name: "image", placeholder: "Image URL" },
    { type: "text", name: "overview", placeholder: "Overview" },
    { type: "number", name: "servings", placeholder: "Servings" },
    { type: "number", name: "prepMinutes", placeholder: "Prep Minutes" },
    { type: "number", name: "cookMinutes", placeholder: "Cook Minutes" },
    { type: "text", name: "ingredients", placeholder: "Ingredients (comma separated)" },
    { type: "text", name: "instructions", placeholder: "Instructions (comma separated)" },
  ];

  return (
    <form className="input__wrapper container" onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default CreateRecipe;
