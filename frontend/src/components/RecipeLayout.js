import React from "react";
import "./RecipeLayout.scss";
/*eslint-disable */
export const RecipeLayout = ({ item }) => {
  return (
    <article key={item._id} className="recipe___content">
      <section className="recipe___content_title">
        <h2> {item.title} </h2>
      </section>
      <section className="recipe___content_img">
        <img src={item.image} alt="image of dish" />
      </section>
      <section className="recipe___content_categories_hearts_username">
        <div>
          <p> {item.mainCategory} </p>
          <p> {item.subCatergory} </p>
        </div>
        <div>
          <button>like</button>
          <p> {item.hearts} </p>
          <p> {item.username} </p>
        </div>
      </section>
    </article>
  );
};
