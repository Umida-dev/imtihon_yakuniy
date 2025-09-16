import React from "react";
import { Link } from "react-router-dom";

function SmartCook() {
  return (
    <section className="">
      <div className="container cls">
        <h2 className="smarter__title">Ready to cook smarter?</h2>
        <p className="smarter__desc">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <Link className="btn smarter__btn" to="/recipes">
          Browse recipes
        </Link>
      </div>
    </section>
  );
}

export default SmartCook;
