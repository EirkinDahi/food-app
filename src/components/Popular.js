import React, { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_KEY}&number=9`
    );
    const data = await api.json();
    // console.log(data);
    setPopular(data.recipes); //pulling returned object from API
  };

  return (
    //*for each recipe that is returned from api, output title - map function loops through each recipe
    <div>
      {popular.map((recipe) => {
        return (
          <div key = {recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
