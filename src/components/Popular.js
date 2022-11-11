import React, { useEffect } from 'react'

const Popular = () => {

    useEffect(() => {
        getPopularRecipes();
    },[]);

    const getPopularRecipes = async() => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.FOOD_API_KEY}&number= 9`);
        const data = await api.json();
        console.log(data);
    }


    return (
        <div>
            Popular
        </div>
    )
}

export default Popular
