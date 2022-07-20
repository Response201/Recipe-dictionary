import React, { useEffect, useState } from "react";
import { useFetchRecipe, data } from "../hooks/useFetchRecipe";
import { useSelector } from "react-redux";
import { Loading } from "../feature/Loading";
import { RecipeLayout } from "../components/RecipeLayout";
import "./Home.scss";
/*eslint-disable */
export const Home = () => {
  const loading = useSelector((store) => store.ui.loading);
  const [url, setUrl] = useState("");
  
  const { data } = useFetchRecipe({ url });

  useEffect(() => {
    setUrl("https://backend-recipe-ect.herokuapp.com/newestRecipes");
  }, []);

  return (
    <article className="home___container">
      <h2 className="headerText">Foodnary</h2>

      {loading ? (
        <Loading />
      ) : (
        <section className="recipe___Container">
          {data &&
            data.map((item) => {
              return <RecipeLayout item={item} />;
            })}
        </section>
      )}
    </article>
  );
};
